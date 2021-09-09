const express = require('express');
const app = express();

app
    .get('/', (req, res) => {
        res.send("Ajde tuka si!!");
    })
    .post('/hehe', (req, res) => {
        console.log('Na rutata .hehe se isprati post REQUEST');
        res.send({
            x: 'y',
            z: [12, 3, 4, 6],
            t: true
        });
    })
    .delete('/hehe', (req, res) => {
        console.log('Se toa da se izbrishe');
        res.send('Izbrishano ne se nerviraj!');
    })

app.listen('3003', () => {
    console.log('App started on port 3003...')
});

//localhost:3003

//HTTP methods
/**
 * 1.GET koga barame da vidime podatoci
 * 2.POST koga zacuvuvame vo bazata
 * 3.PUT koga sakame da update nesto na veke postoecki zapis
 * 4.PATCH krpime nekakov postoecki zapis
 * 5.DELETE koga brisime resursi
 */



//https://time.mk/, URL Uniform Resource Locator

//time.mk -> 192.186.1.4, Domain Name System DNS