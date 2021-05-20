export const generateCipher = () => {
    let cipher = '';

    do {
        const randomDigit = Math.floor(Math.random() * 10);
        
        if (!cipher.includes(randomDigit.toString()))
            cipher += randomDigit;
    } while(cipher.length < 4);

    console.log(cipher);

    return cipher;
}

export const getHitCount = (cipher, masterCipher) => {
    let hitCount = 0;

    for(let i in masterCipher)
        if (cipher[i] === masterCipher[i])
            hitCount++;

    return hitCount;
}

export const getIncludeCount = (cipher, masterCipher) => {
    let includeCount = 0;

    for(let i in masterCipher)
        if(cipher.includes(masterCipher[i]))
            includeCount++;

    return includeCount;
}
