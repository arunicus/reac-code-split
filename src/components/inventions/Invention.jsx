import React from 'react';
import './Invention.css';

export default function Invention({ name }) {
    return (
        <div class="card">
            <img src="r2d2.png" alt="Avatar" class="avatar" />
            <div class="container">
                <p>  
                    <b>testt</b> <br /> 
                    Architect & EngineerArchitect & EngineerArchitect & EngineerArchitect & EngineerArchitect & EngineerArchitect & Engineer
                </p>
            </div>
            <hr class="light"/>
            <div style={{padding: '8px'}}>
                <span style={{float: 'right'}}>
                    <i className="heart outline like icon"></i>
                    17 likes
                </span>
                    <i className="comment icon"></i>
                    3 comments
            </div>
        </div>
    );
}