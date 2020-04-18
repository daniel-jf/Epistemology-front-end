import React from 'react';
import './Learn.css';
import LearnContainer from '../../containers/LearnContainer/LearnContainer';

class Learn extends React.Component {
    state = {
        subjects: [
          { 
            subject:"Biology",  
            title: "DNA",
            id: 1, 
            reading: "1",
          },
          { 
            subject:"Mathematics", 
            title: "Derivatives",
            id: 2,
            reading: "2"
          },
          { 
            subject:"Chemistry", 
            title: "Heat Distribution",
            id: 3,
            reading: "3",
          },
          { 
            subject:"Physics", 
            title: "Intro to BioPhysics",
            id: 4,
            reading: "4",
            visual: URL("https://www.aboutbioscience.org/wp-content/uploads/2017/06/biophysics.jpg"),
          },
        ],
    }

    render() {
     return(
     <div>
         <div className="teach">
             <h2>Teach Me:</h2>
         </div>
         <h3 className="mt-3 text-center justify-content-center">Lessons</h3>
         <div className="row">
             <LearnContainer 
                subjects={this.state.subjects}
            />
        </div>
      </div>
     )
}
}
export default Learn;