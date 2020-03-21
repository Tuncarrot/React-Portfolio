import React from 'react';

const Infocard = (props) => {
    return (
        <div class="card mb-3 blend-in card-space" style="max-width: 75%;">
            <div class="row no-gutters">
                <div class="justify-content-center">
                    <div class="card-body border-primary">
                        <div class="row justify-content-center title-styling">
                            <h5>{props.title}</h5>
                        </div>
                        <div class="row justify-content-center title-styling">
                            <p>
                                {props.skills.map(function(n)
                                {
                                    return {n};
                                })}
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Infocard;