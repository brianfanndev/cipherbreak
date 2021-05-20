import React, { useState } from 'react';
import CipherPad from '../components/CipherPad';
import CipherGuess from '../components/CipherGuess';
import { generateCipher, getHitCount, getIncludeCount } from '../utilities/CipherUtil';
import { useHistory } from 'react-router-dom';
import '../styles/Game.scss';

export default function GamePage() {
    const [masterCipher, setMasterCipher] = useState();
    const [cipherEntries, setCipherEntries] = useState([]);
    const history = useHistory();

    initializeCipher();

    function initializeCipher() {
        if (!masterCipher)
            setMasterCipher(generateCipher());
    }

    function onCipherSubmit(cipher) {
        const hits = getHitCount(cipher, masterCipher);
        const includes = getIncludeCount(cipher, masterCipher) - hits;

        let newCipherEntry = {
            cipher,
            hits,
            includes
        }

        setCipherEntries([...cipherEntries, newCipherEntry]);
    }

    return (
        <div>
            <h1>
                Game Page
            </h1>
            {
                cipherEntries.map((cipherEntry, index) => <CipherGuess {...cipherEntry} key={index}/>)
            }
            <CipherPad onCipherSubmit={onCipherSubmit} />
            <button onClick={() => { history.push('/') }}>
                Return to splash
            </button>
        </div>
    )
}
