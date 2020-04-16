import React from 'react';
import LessonCard from '../../components/Lesson/Lesson';

class LearnContainer extends React.Component {
  render() {
    return(
    // <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    //      {this.props.subjects && this.props.subjects.map((subject, id) =>
    //      <LessonCard 
    //         subjects={this.props.subjects}
    //         subject={this.props.subjects.subject}
    //         id={id}
    //         />)
    //     }
    // </div>
      <div className="col-md-4 border-info">
                  <h3 className="mt-3">Lessons</h3>
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        { this.props.subjects && this.props.subjects.map((subject, idx) => 
          <LessonCard
            subjects={this.props.subjects}
            subject={subject}
            idx={idx}
          />)
        }
        </div>
      </div>
    )
  }
}

export default LearnContainer;