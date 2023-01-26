const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArr = Array.from(expr);
    const groupSize = 10;
    const groupedArray = [];
    const uncodedArray = [];

    for (let i = 0; i < exprArr.length; i += groupSize) {
        groupedArray.push(exprArr.slice(i, i + groupSize).join(''));
    }

    const replacedArr = groupedArray.map( (item) => 
        item.replace(/00/g, '')
        .replace(/10/g, '.')
        .replace(/11/g, '-')
        .replace('**********', ' ')
    )

    replacedArr.forEach( (item) => {
        if (item != ' ') {
            uncodedArray.push(MORSE_TABLE[item]);
        } else {
            uncodedArray.push(' ');
        }
    });

    return uncodedArray.join('');
}

module.exports = {
    decode
}