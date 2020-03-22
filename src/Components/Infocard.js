import React from 'react';
import '../Stylesheets/styling.css';

const Infocard = (props) => {
    return (
        <div className="card mb-3 blend-in card-space" style={{maxWidth: '75%'}}>
            <div className="row no-gutters">
                <div className="justify-content-center">
                    <div className="card-body border-primary">
                        <div className="row justify-content-center title-styling">
                            <h5>{props.title}</h5>
                        </div>
                        <div className="row justify-content-center title-styling">
                            <p>{props.content}</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Infocard;