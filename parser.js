const axios = require('axios');
const cheerio = require('cheerio');

const url = 'http://ultimate.fi/pelikone/?view=gameplay&game=8991';

const gameTexts = [];

const fetchGame = async () => {
    const result = await axios.get(url);
    return cheerio.load(result.data);
};

const getGameProgress = async () => {
    const $ = await fetchGame();

    const game = $('td[title]');
        

    $(game).each((i, elem) => {

        /*gameTexts.push($(elem).attr('class'));
        gameTexts.push($(elem).attr('title'));*/

        gameTexts.push({
            class: $(elem).attr('class'),
            title: $(elem).attr('title')
            })
        
    });
    console.log(gameTexts);
    return {
        gameTexts: [...gameTexts]
    }
};

module.exports = getGameProgress;

/*axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const game = $('td[title]');
        

        $(game).each((i, elem) => {
            if (i < game.length) {
                gameTexts.push({
                    class: $(elem).attr('class'),
                    title: $(elem).attr('title')
                })
            }
        });
        console.log(gameTexts);

        

        
    })
    .catch(console.error);
    */