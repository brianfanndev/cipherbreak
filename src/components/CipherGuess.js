import React from 'react';

export default function CipherGuess(params) {
    const { cipher, hits, includes } = params;

    return (
        <div>
            <p>
                {`${cipher} - ${hits} | ${includes}`}
            </p>
        </div>
    )
}