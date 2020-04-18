import React from 'react';
import LessonCard from '../../components/Lesson/Lesson';

class LearnContainer extends React.Component {
  render() {
    return(
        <div className="col-md-6">
          { this.props.subjects && this.props.subjects.map((subject, id) => 
          <LessonCard
          subject = {subject}
          />
          )
        }
        </div>
    )
  }
}

export default LearnContainer;