import React, { useState } from 'react';
import './App.css';
import './Stylesheets/styling.css'
import Navbar from './Components/Navbar';
import UpdateText from './Components/UpdateText';
import Infocard from './Components/Infocard';
import Skills from './Components/Skills';

const App = props => {

  const [ skillsState ] = useState({
    skills: [
      { title: "Programming Languages", skills: ['C','C++','C#']}
    ]
  });

  const [ infoState ] = useState({
    updateDate: [
      { message: "Updated on March 21st"}
    ],
    aboutMe: [
      { title: "About Me", content: "Hi there! My name is Adam Tunkiewicz "+
      "and I'm a software engineering student. I enjoy making projects that involve "+
      "my personal interests and improve my lifestyle. Currently this website under "+
      "construction as different projects are being updated and added."}
    ]
  });

  return (
    <div className="App">

      <Navbar />

      <div className="header-space">
        <div className="card text-center blend-in">
          <div className="card-body">
            <h2 className="title-styling card-space-half">About Me</h2>
              <div className="row justify-content-center">
                <div className="card mb-3 blend-in card-space" style={{maxWidth: '75%'}}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={require("./Images/me.jpg")} className="card-img" alt="Picture of Me"/>
                    </div>
                    <div className="col-md-8">
                          <div className="card-body border-primary">

                              <Skills title="Programming Languages" list={["C","C++","C#"]}/>

                              <Skills title="Web Languages and Frameworks" list={["HTML","CSS","Javascript","Ruby on Rails","React","Bootstrap"]}/>

                              <Skills title="Interests and Hobbies" list={["&#129354;","&#127929;","&#127843;","&#127958;","&#128123;"]}/>

                          </div>  
                    </div>
                  </div>
                </div>

                  <Infocard title="About Me" content="Hi there! My name is Adam Tunkiewicz
                  and I'm a software engineering student. I enjoy making projects that involve
                  my personal interests and improve my lifestyle. Currently this website under
                  construction as different projects are being updated and added." />

                </div>
              </div>
            
              <UpdateText message="Updated on March 21st" />

            </div>
          </div>
        </div>
  );
}

export default App;
