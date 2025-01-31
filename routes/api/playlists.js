const express = require('express');
const router =  express.Router();
const playlistsController = require('../../controllers/playlistsController')

router.route('/')
    .get(playlistsController.getAllPlaylists)
    .post(playlistsController.createPlaylist)
    .put(playlistsController.updatePlaylist)
    .delete(playlistsController.deletePlaylist);


router.route('/:playlistcode')
    .get(playlistsController.getPlaylist)    

module.exports = router;