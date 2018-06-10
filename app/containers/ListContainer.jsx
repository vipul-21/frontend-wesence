import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { getAllItems, removeItem, editItem } from '../redux/actions/todos';

import TodoItem from '../components/TodoItem';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '1em',
    fontSize: '1.5em',
    fontWeight: 600,
  },
  link: {
    color: 'black',
  },
  itemsContainer: {
    padding: '2em',
  },
  add: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '2em',
  },
  completedList: {
    display: 'flex',
    justifyContent: 'center',
  },
};

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getAllItems();
  }
  render() {
    return (
      <div>
        <div>
          <div style={styles.title}>
             Todo list
          </div>
          <div style={styles.add}>
            <NavLink to="/add" style={styles.link}>
              <Button color="green">
                    Add Item
              </Button>
            </NavLink>
          </div>
        </div>
        <div style={styles.itemsContainer}>
          {this.props.todoList.length > 0 ?
             _.reverse(this.props.todoList).map(item => (
               <TodoItem
                 item={item}
                 removeItem={this.props.removeItem}
                 editItem={this.props.editItem}
               />)) :
             <div style={styles.completedList}>
             Awesome work !
             </div>}
        </div>
      </div>

    );
  }
}

ListContainer.propTypes = {
  todoList: PropTypes.array,

  editItem: PropTypes.func,
  removeItem: PropTypes.func,
  getAllItems: PropTypes.func,
};

ListContainer.defaultProps = {
  todoList: [],

  editItem: () => {},
  getAllItems: () => {},
  removeItem: () => {},
};

function mapStateToProps(state) {
  return {
    todoList: state.todos.todoList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    editItem: (item) => {
      dispatch(editItem(item));
    },
    getAllItems: () => {
      dispatch(getAllItems());
    },
  };
}
const RadiumListContainer = Radium(ListContainer);

export default connect(mapStateToProps, mapDispatchToProps)(RadiumListContainer);
