import React from 'react';
import './Lesson.css';
import PRWStyle from '../LessonsPage/PhysicsLessons/PhysicsRWStyle';
import LessonContainer from '../../containers/LessonContainer/LessonContainer';


class LessonCard extends React.Component {
  render(){
    return(
        <div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{this.props.subject.subject}</h5>
              <p class="card-text">{this.props.subject.title}</p>
              <LessonContainer 
              lesson= {this.props.subject}
              />
            </div>
          </div>
      </div>
    )
  }
}


export default LessonCard;