const { Client } = require('clashofclans.js');
const client = new Client();
// const client = new Client({ keys: [], cache: true, retryLimit: 2, restRequestTimeout: 5000 });

(async function () {
    await client.login({ email: 'sriharshakr3211@gmail.com', password: 'EAR#.9AFCHpaYZG' });

    const clan = await client.getClan('#RY8GYCLY');
    for (let i = 0; i < clan.memberCount; i++) {
        console.log(`Name: ${clan.members[i].name}\tTrophies: ${clan.members[i].trophies}`)
    }
})();