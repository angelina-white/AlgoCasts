// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) 
{
    let steps = '';
    let spaces = "";
    let space = ' ';
    for (let i=0; i<n; i++)
    {
        steps = steps + "#";
        spaces = space.repeat(n-1-i);
        console.log(steps + spaces);
    }
}

module.exports = steps;

//consoles steps right
// let steps = '';
// let spaces = '-';
// for (let i=0; i<n; i++)
// {
//     steps = steps + "#";
//     console.log(n)
//     console.log(steps);
// }
