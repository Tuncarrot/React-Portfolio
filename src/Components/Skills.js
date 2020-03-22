import React from 'react';

const Skills = (props) => {
    var skillsList = props.list;
    var formattedList = [];

    for (var i=0; i<skillsList.length;i++)
    {
        formattedList.push(<span className="badge badge-pill badge-primary skills-pills">{skillsList[i]}</span>)
    }

    return (
    <div>
        <div className="row justify-content-center title-styling">
            <h5>{props.title}</h5>
        </div>
        <div className="row justify-content-center">
            {formattedList}
        </div>
    </div>
    );
}

export default Skills;