const express = require('express');

const characters = require('../characters/charactersModel.js')

const server = express();

server.use(express.json());


server.get('/characters', async (req, res) => {
    const all = await characters.getAll();
    
    res.status(200).json(all)
})

module.exports = server;