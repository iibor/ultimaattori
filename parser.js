const axios = require('axios');
const cheerio = require('cheerio');

const url = 'http://ultimate.fi/pelikone/?view=gameplay&game=8991';

axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const game = $('td[title]');
        const gameTexts = []

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