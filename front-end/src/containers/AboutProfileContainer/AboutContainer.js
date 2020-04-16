import React from 'react';


const AboutContainer = (props) => {
    console.log(props.learningStyles)
    return(
    <div>
        <div className="row">
        <div className="col-4">
            <div className="list-group" id="my-list" role="tablist">
            <a className="list-group-item list-group-item-action active" data-toggle="list" href="#visual" role="tab">Visual</a>
            <a className="list-group-item list-group-item-action" data-toggle="list" href="#auditory" role="tab">Auditory</a>
            <a className="list-group-item list-group-item-action" data-toggle="list" href="#kinesthetic" role="tab">Kinesthetic</a>
            <a className="list-group-item list-group-item-action" data-toggle="list" href="#RW" role="tab">Reading/Writing</a>
            </div>
        </div>
        <div className="col-8">
            <div className="tab-content">
            <div className="tab-pane fade show active" id="visual" role="tabpanel">About: Someone with a preference for visual learning is partial to seeing and observing things, including pictures, diagrams, written directions and more. This is also referred to as the “spatial” learning style. Students who learn through sight understand information better when it’s presented in a visual way. These are your doodling students, your list makers and your students who take notes.</div>
            <div className="tab-pane fade" id="auditory" role="tabpanel">About: Auditory learners tend to learn better when the subject matter is reinforced by sound. These students would much rather listen to a lecture than read written notes, and they often use their own voices to reinforce new concepts and ideas. These are the students who like to read out loud to themselves, aren’t afraid to speak up in classNameName and are great at verbally explaining things. Additionally, they may be slower at reading and may repeat things a teacher tells them.</div>
            <div className="tab-pane fade" id="kinesthetic" role="tabpanel">About: Kinesthetic learners or “tactile” learners learn through experiencing or doing things. They like to get right in the thick of things by acting out events or using their hands to touch and handle in order to understand concepts. These are the students who might struggle to sit still, might be good at sports or like to dance, need to take breaks when studying and might not have great handwriting.</div>
            <div className="tab-pane fade" id="RW" role="tabpanel">About: Reading/writing learners prefer to learn through written words. While there is some overlap with visual learning, these types of learners are drawn to expression through writing, reading articles on the internet, writing in diaries, looking up words in the dictionary and searching the internet for just about everything.</div>
            </div>
        </div>
        </div>
    </div>
    )
}
export default AboutContainer;
 