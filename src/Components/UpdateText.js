import React from 'react';
import '../Stylesheets/styling.css';

const UpdateText = (props) => {
    return (
    <div className="card-footer text-muted blend-in">
        {props.message}
    </div>
    );
}

export default UpdateText;