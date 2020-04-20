import React from 'react';
import './About.css';

const About = () => {
    return(
        <div>
            <div className="cardAboutMe text-center">
            <div className="row aboutMeContainer no-gutters">
                    <div className="col-md-3">
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=b834b1df26&attid=0.1.1&permmsgid=msg-f:1664460986929427301&th=17195a72ec6cb365&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9JBybbp38bMRrd-YNCpVgNuWyWNcjqHfTItMyxUv5rXwwbeo5a1OCFZBX-5FDcQakhtqJEEW3Ma4465-nCe947GRjenZShTOFk2f8zIDQ9Yfblej7OoDiFlNM&disp=emb" className="card-img" alt="..."/>
                    </div>
                <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">About the developer</h5>
                    <p className="card-text">Hello to those viewing my about me page! My name is Daniel Francisco and I am a software engineer. Prior to pursuing software engineering, I was in the medical field pursuing medicine. When I find the time to do something other than code I enjoy hiking, snowboarding, and hosting game night with friends and family.</p>
                    <p className="card-text">I'm sure you are more interested in learning about my app. So, what is Episetmology? Epistemoloy is the study of knowledge. Within knowledge there are four main learning styles: Visual, Audio, Kinesthetic, and Reading/Writing. This app was made with the intention that students will be able to learn the same content in whatever way their learning styles allows them to. However, more specifically with STEM. STEM is something that requires a lot of time and for most, they aren't able to focus that long. This app will help with that! Enjoy some of the games, videos, or read those lectures!  </p>
                    <hr />
                    Connect with me on <a href="https://www.linkedin.com/in/danielj-francisco">LinkedIn</a>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;