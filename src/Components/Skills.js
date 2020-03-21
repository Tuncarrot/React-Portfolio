import React from 'react';

const Skills = (props) => {
    return (
    <div>
        <div className="row justify-content-center title-styling">
            <h5>{props.title}</h5>
        </div>
        <div className="row justify-content-center">
            <span className="badge badge-pill badge-primary skills-pills">C</span>
        </div>
    </div>
    );
}

export default Skills;