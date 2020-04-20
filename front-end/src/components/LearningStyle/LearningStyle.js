import React from 'react';
// import Learn from '../Learn/Learn';
import AboutContainer from '../../containers/AboutProfileContainer/AboutContainer';

class LearningStyle extends React.Component {
    state ={
        learningStyles: [
        {
            title:"Visual",
            about:"Someone with a preference for visual learning is partial to seeing and observing things, including pictures, diagrams, written directions and more. This is also referred to as the “spatial” learning style. Students who learn through sight understand information better when it’s presented in a visual way. These are your doodling students, your list makers and your students who take notes.",
            combat:"The whiteboard is your best friend when teaching visual learners! Teachers should create opportunities to draw pictures and diagrams on the board, or ask students to doodle examples based on the topic they’re learning."
        },
        {
            title:"Auditory",
            about:"Auditory learners tend to learn better when the subject matter is reinforced by sound. These students would much rather listen to a lecture than read written notes, and they often use their own voices to reinforce new concepts and ideas. These are the students who like to read out loud to themselves, aren’t afraid to speak up in className and are great at verbally explaining things. Additionally, they may be slower at reading and may repeat things a teacher tells them.",
            combat:"get your auditory learners involved in the lecture by asking them to repeat back new concepts to you. Ask questions and let them answer. Invoke group discussions so your auditory and verbal processors can properly take in and understand the information they’re being presented with. Watching videos and using music or audiotapes are also helpful ways to engage with auditory learners."
        },
        {
            title:"Kinesthetic",
            about:"Kinesthetic learners or “tactile” learners learn through experiencing or doing things. They like to get right in the thick of things by acting out events or using their hands to touch and handle in order to understand concepts. These are the students who might struggle to sit still, might be good at sports or like to dance, need to take breaks when studying and might not have great handwriting.",
            combat: "The best way teachers can help these students learn is by getting them moving. Teachers should instruct students to act out a certain scene from a history lesson they’re teaching. Additionally they should encourage these students by incorporating movement into lessons: pacing to help memorize, learning games that involve moving around the classNameroom or having students write on the whiteboard as part of an activity."
        },
        {
            title:"Reading/Writing",
            about:"reading/writing learners prefer to learn through written words. While there is some overlap with visual learning, these types of learners are drawn to expression through writing, reading articles on the internet, writing in diaries, looking up words in the dictionary and searching the internet for just about everything",
            combat:"Allow plenty of time for these students to absorb information through the written word, and give them opportunities to get their words out on paper as well."
        }
    ],
    selectedStyle: 0
    }

    changeSelection = (idx) => {
        this.setState({
            selectedStyle: idx
        })
    }

    render(){
        console.log(this.state.learningStyles)
        return(
            <div>
                <div className="row">
                    <AboutContainer 
                        learningStyle={this.state.learningStyles[this.state.selectedStyle]}
                        learningStyles={this.state.learningStyles}
                        changeSelection={this.changeSelection}
                    />
                </div>
            </div>
        )
    }
}

export default LearningStyle;