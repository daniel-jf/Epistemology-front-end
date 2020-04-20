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
            image: "https://previews.123rf.com/images/maridav/maridav1110/maridav111000025/10916747-dna-blackboard-drawing-hand-drawing-chemical-structure-of-dna-on-black-chalkboard-with-chalk-chemist.jpg",
            reading: "Deoxyribonucleic acid (DNA) is a molecule composed of two polynucleotide chains that coil around each other to form a double helix carrying genetic instructions for the development, functioning, growth and reproduction of all known organisms and many viruses. DNA and ribonucleic acid (RNA) are nucleic acids. Alongside proteins, lipids and complex carbohydrates (polysaccharides), nucleic acids are one of the four major types of macromolecules that are essential for all known forms of life.",
            visual: <ReactPlayer url="https://www.youtube.com/watch?v=8kK2zwjRV0M" controls={true}/>
          },
          { 
            subject:"Mathematics", 
            title: "Derivatives",
            id: 2,
            image: "https://www.theparisreview.org/blog/wp-content/uploads/2019/07/istock-512102071.jpg",
            reading: "The derivative of a function of a single variable at a chosen input value, when it exists, is the slope of the tangent line to the graph of the function at that point. The tangent line is the best linear approximation of the function near that input value. For this reason, the derivative is often described as the 'instantaneous rate of change', the ratio of the instantaneous change in the dependent variable to that of the independent variable.",
            visual: <ReactPlayer url="https://www.youtube.com/watch?v=ObHJJYvu3RE" controls={true}/>,
          },
          { 
            subject:"Chemistry", 
            title: "Heat Distribution",
            id: 3,
            image: "https://images.theconversation.com/files/121885/original/image-20160510-20731-1pf8nwv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
            reading: "When there is a suitable path between two systems with different temperatures, heat transfer occurs necessarily, immediately, and spontaneously from the hotter to the colder system. Thermal conduction occurs by the stochastic (random) motion of microscopic particles (such as atoms or molecules). In contrast, thermodynamic work is defined by mechanisms that act macroscopically and directly on the system's whole-body state variables; for example, change of the system's volume through a piston's motion with externally measurable force; or change of the system's internal electric polarization through an externally measurable change in electric field. The definition of heat transfer does not require that the process be in any sense smooth. For example, a bolt of lightning may transfer heat to a body.",
            visual: <ReactPlayer url="https://www.youtube.com/watch?v=SV7U4yAXL5I" controls={true}/>,
          },
          { 
            subject:"Physics", 
            title: "Intro to BioPhysics",
            id: 4,
            image:"https://pla.s6img.com/society6/img/bRALdsDY8Hh7Xm6cpXS-vNoTqW4/w_1500/coffee-mugs/swatch/~artwork,fw_4602,fh_1998,fx_-1367,fy_-1622,iw_7500,ih_7500/s6-original-art-uploads/society6/uploads/misc/5122c35a3a1a4f9ebd81db58644a8801/~~/physics-equations-on-chalkboard-mugs.jpg",
            reading: "Biophysics, also known as biological physics, is an interdisciplinary science that applies the principles of physics and chemistry and the methods of mathematical analysis and computer modeling to understand how the mechanisms of biological systems work. Biophysics is a molecular science that seeks to explain biological function in terms of the molecular structures and properties of specific molecules. The size of these molecules varies dramatically, from small fatty acids and sugars (1 nanometer (nm), or the equivalent of three atoms in width), to macromolecules such as proteins (5 to 10 nm), to starches (greater than 1,000 nm and longer than the thickness of a human hair), to the enormously elongated DNA molecules (more than 1 centimeter long but only 20 nm wide, or the scaled equivalent of a piece of string 45 miles long). These biomolecules, the sole building blocks of living organisms, assemble into cells, tissues and whole organisms by forming complex individual structures that are visible under a light microscope.",
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
         <div>
             <LearnContainer 
                subjects={this.state.subjects}
            />
         </div>
      </div>
     )
}
}
export default Learn;