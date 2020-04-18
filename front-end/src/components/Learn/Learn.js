import React from 'react';
import './Learn.css';
import LearnContainer from '../../containers/LearnContainer/LearnContainer';
import ReactPlayer from 'react-player';

class Learn extends React.Component {
    state = {
        subjects: [
          { 
            subject:"Biology",  
            title: "DNA",
            id: 1, 
            reading: "1",
            visual: <ReactPlayer url="https://www.youtube.com/watch?v=8kK2zwjRV0M" controls={true}/>
          },
          { 
            subject:"Mathematics", 
            title: "Derivatives",
            id: 2,
            reading: "2",
            visual: <ReactPlayer url="https://www.youtube.com/watch?v=ObHJJYvu3RE" controls={true}/>,
          },
          { 
            subject:"Chemistry", 
            title: "Heat Distribution",
            id: 3,
            reading: "3",
            visual: <ReactPlayer url="https://www.youtube.com/watch?v=SV7U4yAXL5I" controls={true}/>,
          },
          { 
            subject:"Physics", 
            title: "Intro to BioPhysics",
            id: 4,
            reading: "4",
            visual: <ReactPlayer url="https://www.youtube.com/watch?v=7kb1VT0J3DE&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV&t=0s" controls={true}/>,
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