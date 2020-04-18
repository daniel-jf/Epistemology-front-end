import React from 'react';
import PRWStyle from '../../components/LessonsPage/PhysicsLessons/PhysicsRWStyle';

class LessonContainer extends React.Component {

  state = {
    content: ""
  }

  setContent = (content) => {
    this.setState({
      content
    })
  }

  render(){
    return(
        <div>
          {/* changes to whichever subject's lecture based off of button corresponding to current id */}
              <button onClick={() => this.setContent(this.props.lesson.reading)} type="button" class="btn btn-primary mr-1" data-toggle="modal" data-target={`#modal${this.props.lesson.id}`}>
                Reading
              </button>
              <button onClick={() => this.setContent(this.props.lesson.visual)} type="button" class="btn btn-primary mr-1" data-toggle="modal" data-target={`#modal${this.props.lesson.id}`}>
                Visual
              </button>
              <button onClick={() => this.setContent(this.props.lesson.challenge)} type="button" class="btn btn-primary" data-toggle="modal" data-target={`#modal${this.props.lesson.id}`}>
                Challenge
              </button>
              <div class="modal fade" id={`modal${this.props.lesson.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">{this.props.lesson.subject}: {this.props.lesson.title}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      {this.state.content}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Done</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}
}

export default LessonContainer;