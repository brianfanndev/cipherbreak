import React from 'react';

export default function CodeGuess(params) {
    const { code } = params;

    return (
        <div>
            <h1>
                { code }
            </h1>
        </div>
    )
}