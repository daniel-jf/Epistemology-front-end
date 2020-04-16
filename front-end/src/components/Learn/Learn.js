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
            lecture: "lorem ipsum",
          },
          { 
            subject:"Mathematics", 
            title: "Derivatives",
            id: 2,
            lecture: "lorem ipsum"
          },
          { 
            subject:"Chemistry", 
            title: "Heat Distribution",
            id: 3,
            lecture: "lorem ipsum",
          },
          { 
            subject:"Physics", 
            title: "Movement",
            id: 4,
            lecture: "lorem ipsum",
          },
        ],
        // selectedSubject: 1
    }
        
    // changeSelection = (idx) => {
    // this.setState({
    //     selectedSubject: idx
    // })
    // }

    render() {
        // console.log(this.state.subjects.subject)

     return(
     <div>
         <div className="teach">
             <h2>Teach Me:</h2>
         </div>
         <div className="row mb-2">
             <div className="col-md-6">
             <LearnContainer 
                subjects={this.state.subjects}
                // changeSelection={this.changeSelection}
            />

             {/* </div>
             <div className="col-md-6">
             <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                 <div className="col p-4 d-flex flex-column position-static">
                 <h3 className="mb-0">Mathematics</h3>
                 <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                 <a href="#" className="stretched-link">Continue reading</a>
                 </div>
                 <div className="col-auto d-none d-lg-block">
                 <svg className="bd-placeholder-img" width="200" height="250" xmlns="http:www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                 </div>
             </div>
             </div>
             <div className="col-md-6">
             <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                 <div className="col p-4 d-flex flex-column position-static">
                 <h3 className="mb-0">Chemistry</h3>
                 <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                 <a href="#" className="stretched-link">Continue reading</a>
                 </div>
                 <div className="col-auto d-none d-lg-block">
                 <svg className="bd-placeholder-img" width="200" height="250" xmlns="http:www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                 </div>
             </div>
             </div>
             <div className="col-md-6">
             <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                 <div className="col p-4 d-flex flex-column position-static">
                 <h3 className="mb-0">Physics</h3>
                 <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                 <a href="#" className="stretched-link">Continue reading</a>
                 </div>
                 <div className="col-auto d-none d-lg-block">
                 <svg className="bd-placeholder-img" width="200" height="250" xmlns="http:www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                 </div>
             </div> */}
             </div>
         </div>
     </div>
     )
}
}
export default Learn;