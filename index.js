const clan = require('./clan.js')
const readLine = require('readline');

var clantag = '#RY8GYCLY';
var top = 5;

// Use 'await' when calling an async function
function TrophyList(clantag) {
    (async () => {
        await clan.TrophyList(clantag);
    })();
}

function TopExperience(clantag, top) {
    (async () => {
        await clan.TopExperience(clantag, top);
    })();
}

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Clash CLI Tool");
console.log("Options: \n1. List clan member names and trophies - Trophylist\n2.List top 5 experience players - TopExp\n");

rl.question('Enter a command: ', (inputValue) => {
    inputValue = inputValue.toLowerCase();
    switch (inputValue) {
        case 'trophylist':
            TrophyList(clantag);
            break;

        case 'topexp':
            TopExperience(clantag, 5);
            break;

        default:
            console.log('No matching case found');
    }
    rl.close();
});
