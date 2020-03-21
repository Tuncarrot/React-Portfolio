import React, { useState } from 'react';
import './App.css';
import './Stylesheets/styling.css'
import Navbar from './Components/Navbar';
import UpdateText from './Components/UpdateText';
import Card from './Components/Card';
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

                                    <div className="row justify-content-center title-styling">
                                        <h5>Programming Languages</h5>
                                    </div>
                                    <div className="row justify-content-center">
                                        <span className="badge badge-pill badge-primary skills-pills">C</span>
                                        <span className="badge badge-pill badge-primary skills-pills">C++</span>
                                        <span className="badge badge-pill badge-primary skills-pills">C#</span>
                                        <span className="badge badge-pill badge-primary skills-pills">Ruby</span>
                                    </div>
                                    <div className="row justify-content-center title-adjust title-styling">
                                        <h5>Web Languages and Frameworks</h5>
                                    </div>
                                    <div className="row justify-content-center">
                                        <span className="badge badge-pill badge-danger skills-pills">HTML</span>
                                        <span className="badge badge-pill badge-danger skills-pills">CSS</span>
                                        <span className="badge badge-pill badge-danger skills-pills">Javascript</span>
                                    </div>
                                    <div className="row justify-content-center pills-adjust">
                                        <span className="badge badge-pill badge-danger skills-pills">Ruby on Rails</span>
                                        <span className="badge badge-pill badge-danger skills-pills">Angular</span>
                                        <span className="badge badge-pill badge-danger skills-pills">Bootstrap</span>
                                    </div>
                                    <div className="row justify-content-center title-adjust title-styling">
                                        <h5>Interests and Hobbies</h5>
                                    </div>
                                    <div className="row justify-content-center">
                                        <span className="badge badge-pill badge-warning skills-pills">&#129354;</span>
                                        <span className="badge badge-pill badge-warning skills-pills">&#127929;</span>
                                        <span className="badge badge-pill badge-warning skills-pills">&#127843;</span>
                                        <span className="badge badge-pill badge-warning skills-pills">&#127958;</span>
                                        <span className="badge badge-pill badge-warning skills-pills">&#128123;</span>
                                    </div>
                                    
                                </div>  
                          </div>
                        </div>
                      </div>

                    <div id="intro"></div>

                </div>
            </div>
            
            <UpdateText message={infoState.updateDate.message}/>

        </div>
    </div>

    </div>
  );
}

export default App;
