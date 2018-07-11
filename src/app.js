const Express = require('express');
const communityHandlers = require('./entities/community');

function main(){
    const app = Express();

    app.get('/community',communityHandlers);

    app.listen(8000, () => console.log('servidor rodando na porta 8000'));
}

module.exports = main;
