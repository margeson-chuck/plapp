const express = require('express');
const router = express.Router();
const playlistsController = require('../../controllers/playlistsController');
const ROLES_LIST = require('../../config/roles');
const verifyRoles = require('../../middleware/verifyRoles');


router.route('/')
    .get(playlistsController.getAllPlaylists)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), playlistsController.createPlaylist)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), playlistsController.updatePlaylist)
    .delete(verifyRoles(ROLES_LIST.Admin), playlistsController.deletePlaylist);

    router.route('/:id')
        .get(playlistsController.getPlaylist);

module.exports = router;
