const express = require('express');
const router =  express.Router();
const path = require('path');
const data = {};
data.playlists = require('../../model/playlists.json');
const playlistsController = require('../../controllers/playlistsController');
 
router.route('/')
    .get(playlistsController.getAllPlaylists)
    .post(playlistsController.createNewPlaylist)
    .put(playlistsController.updatePlaylist)
    .delete(playlistsController.deletePlaylist)

router.route('/:playlistcode')
    .get(playlistsController.getPlaylist)    

module.exports = router;