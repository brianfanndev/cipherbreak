import React, { useState } from 'react';

export default function CodePad(params) {
    const [code, updateCode] = useState('');
    const { onCodeSubmit } = params;

    function handleSubmit(e) {
        e.preventDefault();

        onCodeSubmit(code);
        updateCode('');
    }

    function onTextChange(e) {
        let val = e.target.value;

        if (val.length > 4) {
            val = val.slice(0, 4);
        }

        for(let i in val) {
            const c = val[i];
            if (val.indexOf(c) !== val.lastIndexOf(c))
                return;
        }

        updateCode(val);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={code} onChange={onTextChange} className="number-input" />
            <button type="submit">
                Crack
            </button>
        </form>
    )
}
