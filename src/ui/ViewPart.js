import React from 'react';

export const ViewPart = ({ state, onClick }) => {
    return (
        <div style={{
            border: '1px solid red',
            padding: '50px',
            margin: '20px'
        }}>
            <div>
                <span>Rendered at: </span>
                <span>
                    {new Date().toTimeString()}
                </span>
            </div>
            <div>
                <span>State value: </span>
                <span>
                    {state}
                </span>
            </div>
            <div>
                <button onClick={onClick}>Increment State Value </button>
            </div>
        </div>
    );
}