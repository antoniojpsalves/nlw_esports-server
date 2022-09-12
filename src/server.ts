import express from 'express';


const app = express();

// Método GET - localhost:3333/ads
app.get('/ads', (request, response) => {
    // return response.send("Acessou ADS!!!");
    return response.json([
        {   id: 1, nome: "Anúncio 1" },
        {   id: 2, nome: "Anúncio 2" },
        {   id: 3, nome: "Anúncio 3" },
        {   id: 4, nome: "Anúncio 4" },
    ]);
});

app.listen(3333)