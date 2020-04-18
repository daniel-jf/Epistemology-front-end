import React from 'react';
import './Lesson.css';
import PRWStyle from '../LessonsPage/PhysicsLessons/PhysicsRWStyle';
import LessonContainer from '../../containers/LessonContainer/LessonContainer';

class LessonCard extends React.Component {
  render(){
    console.log(this.props)
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
        
              {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal">
                R/W
              </button>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal">
                Visual
              </button><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal">
                Challenge
              </button>
              <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Biology: DNA Sequencing</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Done</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div> */}
    </div>
    )
  }
}


export default LessonCard;