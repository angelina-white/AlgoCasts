// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) 
{
    let str = n.toString();
    let rev = "";

    for (let i = str.length - 1; i>=0; i--)
    {
        rev = rev + str[i];
    }

        return parseInt(rev) * Math.sign(n);
}

module.exports = reverseInt;
