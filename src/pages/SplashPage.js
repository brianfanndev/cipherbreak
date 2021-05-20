import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SplashContainer() {
    const history = useHistory();

    return (
        <div className="splash-container">
            <h1 className="splash-header">
                CIPHERBREAK
            </h1>
            <button className="splash-btn" onClick={() => history.push('/game')}>
                Start Game
            </button>
        </div>
    )
}
