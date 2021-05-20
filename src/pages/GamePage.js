import React, { useState } from 'react';
import CodePad from '../components/CodePad';
import CodeGuess from '../components/CodeGuess';
import { useHistory } from 'react-router-dom';
import '../styles/Game.scss';

export default function GamePage() {
    const [masterCode, setMasterCode] = useState();
    const [codes, setCodes] = useState([]);
    const history = useHistory();

    function onCodeSubmit(code) {
        if (!masterCode)
            generateMasterCode();

        setCodes([...codes, code]);
    }

    function generateMasterCode() {
        let masterCode = '';

        do {
            const randomDigit = Math.floor(Math.random() * 10);
            
            if (!masterCode.includes(randomDigit.toString()))
                masterCode += randomDigit;
        } while(masterCode.length < 4);

        setMasterCode(masterCode);
        console.log(masterCode);
    }

    return (
        <div>
            <h1>
                Game Page
            </h1>
            {
                codes.map((code, index) => <CodeGuess code={code} key={index}/>)
            }
            <CodePad onCodeSubmit={onCodeSubmit} />
            <button onClick={() => { history.push('/') }}>
                Return to splash
            </button>
        </div>
    )
}
