import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <section id='AboutMe' className='about--section'>
      <div className='about--section--img'>
        <img src='./img/Egor.png' alt='About Me' />
      </div>
      <div className='hero--section--content--box about--section--box'>
        <div className='hero--section--content'>
          <p className='section--title'>About</p>
          <h1 className='skills--section--heading'>About Me</h1>
          <p className='hero--section-description'>
            As a dedicated developer hailing from the diverse cultural landscape of Russia, educated
            in the vibrant tech hub of London, and currently residing in Tel-Aviv, I am fueled by a
            passion for creating innovative digital solutions. With a keen eye for detail and a
            knack for problem-solving, I strive to craft seamless user experiences that leave a
            lasting impression. From front-end design to back-end development, I enjoy exploring new
            technologies and pushing the boundaries of what's possible. Join me on this exciting
            journey as I turn ideas into reality!
          </p>
          <Link className='btn btn-primary' to='mySkills'>
            <p style={{ fontSize: "24px" }}>Jump to my Expertise</p>
          </Link>
          {/* Social Media Icons */}
          <div className='social-media-icons'>
            <a href='https://github.com/egorchet' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} color='#181717' size='5x' />
            </a>
            <a
              href='https://linkedin.com/in/egorchet'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} color='#0077B5' size='5x' />
            </a>
            <a href='https://facebook.com/egorchetverikov' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} color='#1877F2' size='5x' />
            </a>
            <a href='https://instagram.com/egorchetverikov' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} color='#E4405F' size='5x' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

// import React, { useState, useRef } from "react";
// import data from "../data/index.json";

// const AboutMe = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const modalRef = useRef(); // Create a ref for the modal

//   const openModal = () => {
//     console.log("Opening modal");
//     setModalOpen(true);
//   };

//   const closeModal = (e) => {
//     // Only close if the click is on the modalRef element (background), not its children
//     if (modalRef.current === e.target) {
//       console.log("Closing modal");
//       setModalOpen(false);
//     }
//   };

//   // Listen for click events on the modal background
//   const modalClassName = modalOpen ? "modal modal-open" : "modal";

//   return (
//     <section id='AboutMe' className='about--section'>
//       <div className='about--section--img'>
//         <img src='./img/Egor.png' alt='About Me' />
//       </div>
//       <div className='hero--section--content--box about--section--box'>
//         <div className='hero--section--content'>
//           <p className='section--title'>About</p>
//           <h1 className='skills--section--heading'>About Me</h1>
//           <p className='hero--section-description'>
//             As a dedicated developer hailing from the diverse cultural landscape of Russia, educated
//             in the vibrant tech hub of London, and currently residing in Tel-Aviv, I am fueled by a
//             passion for creating innovative digital solutions. With a keen eye for detail and a
//             knack for problem-solving, I strive to craft seamless user experiences that leave a
//             lasting impression. From front-end design to back-end development, I enjoy exploring new
//             technologies and pushing the boundaries of what's possible. Join me on this exciting
//             journey as we turn ideas into reality!
//           </p>
//           <button className='btn btn-primary' onClick={openModal}>
//             <p style={{ fontSize: "24px" }}>View my Education & Work Experience</p>
//           </button>
//         </div>
//       </div>
//       <div className={modalClassName} ref={modalRef} onClick={closeModal}>
//         <div className='modal-content' onClick={(e) => e.stopPropagation()}>
//           <span className='close' onClick={() => setModalOpen(false)}>
//             &times;
//           </span>
//           <div className='modal-sections-container'>
//             {" "}
//             {/* Flex container */}
//             <div className='modal-section'>
//               <h3>Education</h3>
//               {data.education.map((edu) => (
//                 <div key={edu.institution}>
//                   <img width={50} src={edu.logo} alt={edu.institution} />
//                   <p>{edu.degree}</p>
//                   <p>{edu.date}</p>
//                   <a href={edu.diploma_link} target='_blank' rel='noopener noreferrer'>
//                     Diploma Link
//                   </a>
//                 </div>
//               ))}
//             </div>
//             <div className='modal-section'>
//               <h3>Work Experience</h3>
//               {data.work_experience.map((exp) => (
//                 <div key={exp.company}>
//                   <img src={exp.logo} alt={exp.company} />
//                   <p>{exp.position}</p>
//                   <p>{exp.date}</p>
//                   <p>{exp.location}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;
