const express = require('express');
const router = express.Router();
const plController = require('../../controllers/plController');
const ROLES_LIST = require('../../config/roles');
const verifyRoles = require('../../middleware/verifyRoles');


router.route('/')
    .get(plController.getAllPlaylists)
    //.post(plController.getPlaylistById) 
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), plController.createPlaylist)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), plController.updatePlaylist)
    .delete(verifyRoles(ROLES_LIST.Admin), plController.deletePlaylist);

    router.route('/:playlistcode')
        .get(plController.getPlaylist);

module.exports = router;
