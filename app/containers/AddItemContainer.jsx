import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Segment, Input, Button, Checkbox } from 'semantic-ui-react';
import Datetime from 'react-datetime';
import { addItem, updateItem } from '../redux/actions/todos';

const styles = {
  container: {
    margin: '0 4em',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '1em',
    fontSize: '1.5em',
    fontWeight: 600,
  },
  inputContainer: {
    display: 'grid',
    margin: '1em 10em',
  },
  textArea: {
    border: '1px solid rgba(34,36,38,.15)',
    borderRadius: '0.3em',
    padding: '0.75em',
  },
  input: {
    margin: '1em',
  },
  date: {
    margin: '0 1em',
  },
  remind: {
    display: 'flex',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const now = moment();
const valid = current => current.isAfter(now);


class AddItemContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      title, desc, time, notification,
    } = this.props.currentItem;
    this.state = {
      title,
      desc,
      time: this.props.edit ? moment.unix(time) : now,
      edit: this.props.edit,
      notification: this.props.edit ? notification : false,
    };
    this.onChange = this.onChange.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.toggleNotification = this.toggleNotification.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  changeTime(time) {
    this.setState({
      time,
    });
  }
  toggleNotification() {
    this.setState({
      notification: !this.state.notification,
    });
  }
  addItem() {
    const item = {
      title: this.state.title,
      desc: this.state.desc,
      time: moment(this.state.time).second(0).unix(),
      notification: this.state.notification,
    };
    this.props.addItem(item);
  }
  editItem() {
    const item = {
      title: this.state.title,
      desc: this.state.desc,
      time: moment(this.state.time).second(0).unix(),
      id: this.props.currentItem.id,
      notification: this.state.notification,
    };
    this.props.updateItem(item);
  }

  render() {
    const { edit } = this.state;
    return (
      <Segment style={styles.container}>
        <div style={styles.header}>
          {edit ? 'Edit Item' : 'Add Item' }
        </div>
        <div style={styles.inputContainer}>
          <Input style={styles.input} type="text" required placeholder="Title" value={this.state.title} name="title" onChange={this.onChange} />
          <textarea required style={[styles.textArea, styles.input]} placeholder="Description" name="desc" value={this.state.desc} onChange={this.onChange} />
          <div style={[styles.input, styles.remind]}>
            <Checkbox checked={this.state.notification} name="notification" onChange={this.toggleNotification} label="Remind me" />
            <div style={styles.date}>
              <Datetime defaultValue={this.state.time} isValidDate={valid} name="time" onChange={this.changeTime} />
            </div>

          </div>
        </div>
        <div style={styles.button}>
          <Button basic color="green" onClick={edit ? this.editItem : this.addItem} >
            {edit ? 'Edit Item' : 'Add Item'}
          </Button>
        </div>
      </Segment>
    );
  }
}
AddItemContainer.propTypes = {
  currentItem: PropTypes.object,
  edit: PropTypes.bool,

  addItem: PropTypes.func,
  updateItem: PropTypes.func,
};

AddItemContainer.defaultProps = {
  currentItem: {},
  edit: false,

  addItem: () => {},
  updateItem: () => {},
};

function mapStateToProps(state) {
  return {
    currentItem: state.todos.currentItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => {
      dispatch(addItem(item));
    },
    updateItem: (item) => {
      dispatch(updateItem(item));
    },
  };
}
const RadiumAddItemContainer = Radium(AddItemContainer);

export default connect(mapStateToProps, mapDispatchToProps)(RadiumAddItemContainer);
