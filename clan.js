const { Login } = require('./login');
const { client } = require('./client');

async function TrophyList(clantag) {
    await Login(); // Ensure login completes before proceeding
    const clan = await client.getClan(clantag);
    for (let i = 0; i < clan.memberCount; i++) {
        console.log(`Name: ${clan.members[i].name}\tTrophies: ${clan.members[i].trophies}`);
    }
}

module.exports = { TrophyList };