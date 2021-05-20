import React, { useState } from 'react';

export default function CipherPad(params) {
    const { onCipherSubmit } = params;
    const [cipher, updateCipher] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (cipher.length === 4) {
            onCipherSubmit(cipher);
            updateCipher('');
        }
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

        updateCipher(val);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={cipher} onChange={onTextChange} className="number-input" />
            <button type="submit">
                Crack
            </button>
        </form>
    )
}
