const express = require('express');
const router =  express.Router();
const path = require('path');
const data = {};
data.playlists = require('../../data/playlists.json');

router.route('/')
    .get((req,res) => {
        console.log(data.playlists);
        res.json(data.playlists);
    })
    .post((req, res) => {
        res.json({
            //"playlistcode": req.body.playlistcode,
            "playlisttitle": req.body.playlisttitle,
            "playlistcreatedyear": req.body.playlistcreatedyear
        });
    })
    .put((req, res) => {
        res.json({
            "playlisttitle": req.body.playlisttitle,
            "playlistcreatedyear": req.body.playlistcreatedyear
        });
    })
    .put((req, res) => {
        res.json({
            "playlisttitle": req.body.playlisttitle,
            "playlistcreatedyear": req.body.playlistcreatedyear
        });
    })
    .delete((req,res) => {
        res.json({
            "playlistcode": req.body.playlistcode
        })
    })


router.route('/:playlistcode')
    .get((req,res) => {
        res.json({
            "playlistcode": req.params.playlistcode
        })
    })    

module.exports = router;