import React from 'react';

class LessonCard extends React.Component {
  render(){
    console.log(this.props.subjects);
    return(
      <div  
        // onClick={ () => this.props.changeSelection(this.props.idx)}
        className="col p-4 d-flex flex-column"        
        id="v-pills-london-tab" 
        data-toggle="pill" 
        href="#" 
        role="tab" 
        aria-controls="v-pills-biology" 
        aria-selected="true"
      >
        <h5 className="card-header btn">{this.props.subjects.subject}</h5>
    </div>
    // {/* <div>
    //     <div 
    //         key={this.props.idx} 
    //         className="col p-4 d-flex flex-column position-static"
    //         aria-selected="true"
    //         role="tab" 
    //         data-toggle="pill" 
    //     >
    //         <h3 className="mb-0">{this.props.subjects[this.props.subjects.name]}</h3>
    //         <p className="card-text mb-auto">{this.props.subjects.title}</p>
    //         <a href="#" className="stretched-link">Continue reading</a>
    //     </div>
    //     <div className="col-auto d-none d-lg-block">
    //         <svg className="bd-placeholder-img" width="200" height="250" xmlns="http:www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
    //     </div>
    // </div> */}
    )
  }
}


export default LessonCard;