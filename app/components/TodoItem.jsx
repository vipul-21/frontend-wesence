import React from 'react';
import Radium from 'radium';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Button, Segment, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    color: '#c3c2c2',
    fontWeight: 600,
  },
};

const TodoItem = (props) => {
  const {
    title, desc, id, time, notification,
  } = props.item;
  return (
    <Segment>
      <div style={styles.titleContainer}>
        <div>
          <span style={styles.label}>Title : </span> {title}
        </div>
        <div>
          {notification &&
            <Label>
              Reminder: {moment.unix(time).format('MMM DD YYYY, HH:mm')}
            </Label>}

          <Button basic color="red" onClick={() => props.removeItem(id)}>
              remove
          </Button>
          <NavLink to="/edit" onClick={() => props.editItem(props.item)} style={styles.link}>
            <Button basic color="blue">
                    Edit
            </Button>

          </NavLink>
        </div>
      </div>
      <div>
        <span style={styles.label}>Description : </span>{desc}
      </div>

    </Segment>
  );
};


TodoItem.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    id: PropTypes.string,
    time: PropTypes.number,
  })),

  editItem: PropTypes.func,
  removeItem: PropTypes.func,
};

TodoItem.defaultProps = {
  item: [],

  editItem: () => {},
  removeItem: () => {},
};


export default Radium(TodoItem);
