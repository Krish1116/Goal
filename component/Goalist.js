import React from 'react';
import GoalItems from './GoalItems';
import './Goalist.css';

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <GoalItems
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </GoalItems>
      ))}
    </ul>
  );
};

export default CourseGoalList;
