const express = require('express');
const router = express.Router();
const playlistsController = require('../../controllers/playlistsController')
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(verifyJWT, playlistsController.getAllPlaylists)
    .post(playlistsController.createPlaylist)
    .put(playlistsController.updatePlaylist)
    .delete(playlistsController.deletePlaylist);

    router.route('/:id')
        .get(playlistsController.getPlaylist);

module.exports = router;
