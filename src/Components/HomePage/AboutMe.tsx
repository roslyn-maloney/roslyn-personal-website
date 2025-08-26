// function AboutMe() {
//     return (
//         <div className="about-container">
//             <h2 className="d-flex about-title">About Me</h2><br/>
//             <p className="about-para"> Hello! <br/><br/>

//                 I am a student at Northeastern University Boston campus, and currently on track to receiving a bachelor in Computer Science. I am currently considering concentrating in either software development or human-centered computing. I have a extreme passion for web development and mobile app development. <br/><br/>

//                 I lived in in Boston my whole life and never once thought of moving. I love the hustle and bustle of the city as well as the community is so close knit and welcoming. Although I never though of moving, I do like to travel a lot. Most interesting places would be Aruba, Spain and Canada. Some places I am interesting in visiting would be Greece, South Korea, and Italy. <br/><br/>

//                 Another interest of mine would be computer science. I started my computer science career around 4th or 5th grade with the introduction of scratch. 
//                 My school really wanted to get a jump start on the STEM aspect of the world and so started teaching different programming languages to the students.
//                 After scratch we dabbled in LEGO Mind storm, which is a robot that we both build and code. In high school, my school offered both courses that taught python and Javascript. 
//                 When I heard about these courses I signed right up for them. Moreover I was able to join the Robotics Club and help in competitions by being a programmer.
//                 In between my junior and senior year of high school, I was even given the opportunity to attend a Northeastern Pre-accelerate program as a mechanical and computer engineer. 
//                 While at the program I was able to experience my first taste at C++ when building another robot. <br/><br/>

//                 Through these experience, I knew from the beginning what I wanted to spend the rest of my life doing and I hope that through the Co-op experience I can make this dream a reality. I can’t wait to begin my career in software development through Northeastern Co-op experience! If you wish to reach out, go to the contact page. </p>
//         </div>);
// }
// export default AboutMe;


import React, { forwardRef } from "react";

const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="about-container" ref={ref}>
      <h2 className="d-flex about-title">About Me</h2><br/>
      <p className="about-para">
        Hello! <br /><br />
        I am a student at Northeastern University Boston campus, and currently on track to receiving a bachelor in Computer Science. I am currently considering concentrating in either software development or human-centered computing. I have an extreme passion for web development and mobile app development. <br /><br />

        I lived in Boston my whole life and never once thought of moving. I love the hustle and bustle of the city as well as the community being so close-knit and welcoming. Although I never thought of moving, I do like to travel a lot. Most interesting places would be Aruba, Spain, and Canada. Some places I am interested in visiting would be Greece, South Korea, and Italy. <br /><br />

        Another interest of mine is computer science. I started my computer science career around 4th or 5th grade with the introduction of Scratch. 
        My school really wanted to get a jump start on the STEM aspect of the world and so started teaching different programming languages to the students.
        After Scratch, we dabbled in LEGO Mindstorms, which is a robot that we both built and coded. In high school, my school offered both Python and JavaScript courses. 
        When I heard about these courses I signed right up for them. Moreover, I was able to join the Robotics Club and help in competitions by being a programmer.
        In between my junior and senior year of high school, I was even given the opportunity to attend a Northeastern Pre-accelerate program as a mechanical and computer engineer. 
        While at the program, I experienced my first taste of C++ when building another robot. <br /><br />

        Through these experiences, I knew from the beginning what I wanted to spend the rest of my life doing, and I hope that through the Co-op experience I can make this dream a reality. 
        I can’t wait to begin my career in software development through Northeastern's Co-op experience! If you wish to reach out, go to the contact page.
      </p>
    </div>
  );
});

export default AboutMe;
