import React from 'react';

const Skills = (props) => {
    return (
    <div>
        <div class="row justify-content-center title-styling">
            <h5>{props.title}</h5>
        </div>
        <div class="row justify-content-center">
            <span class="badge badge-pill badge-primary skills-pills">C</span>
        </div>
    </div>
    );
}

export default Skills;