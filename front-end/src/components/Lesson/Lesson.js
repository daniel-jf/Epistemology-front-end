import React from 'react';
import './Lesson.css';
import PRWStyle from '../LessonsPage/PhysicsLessons/PhysicsRWStyle';
import LessonContainer from '../../containers/LessonContainer/LessonContainer';


class LessonCard extends React.Component {
  render(){
    return(
        <div className="lessonContainer">
          <div class="cardLesson ml-4 mr-4 mb-3 row">
          <div class="row no-gutters">
            <div class="col-md-3">
              <img src={this.props.subject.image} className="card-img subjectImage" alt={this.props.subject.title} />
            </div>
          <div class="col-md-8">
            <div class="card-body bodyLesson">
              <h5 className="lessonCardTitle card-title">{this.props.subject.subject}</h5>
              <p class="card-text">{this.props.subject.title}</p>
              <LessonContainer 
              lesson= {this.props.subject}
              />
            </div>
          </div>
          </div>
          </div>
          </div>
    )
  }
}


export default LessonCard;