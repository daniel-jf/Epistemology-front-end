import React from 'react';


const AboutContainer = (props) => {
    console.log(props.learningStyles)
    return(
    <div>
        <div className="col-4">
            <div className="list-group" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action active" data-toggle="list" role="tab" aria-controls="home">{props.learningStyles.title}</a>
            </div>
        </div>
        <div className="col-8">
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">{props.learningStyles.about}</div>
            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">{props.learningStyles.about}</div>
            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
            </div>
        </div>
    </div>
    )
}
export default AboutContainer;
