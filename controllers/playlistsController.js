const data = {
    playlists: require('../model/playlists.json'),
    setPlaylists: function(data) { this.playlists = data }
};

const getAllPlaylists = (req,res) => {
    res.json(data.playlists); 
}

const createPlaylist = (req, res) => {
    console.log('trying to create playlist');
    const newPlaylist = {
        //playlistcode: data.playlists[data.playlists.length -1].playlistcode + 1 || 1,
        playlistcode: req.body.playlistcode,
        playlisttitle: req.body.playlisttitle,
        playlistcreatedyear: req.body.playlistcreatedyear
    }

    if(!newPlaylist.playlisttitle || !newPlaylist.playlistcreatedyear ) {
        return res.status(400).json({ 'message': 'playlist title and playlist createdyear are both required'})
    }

    data.setPlaylists([...data.playlists, newPlaylist]);
    res.status(201).json(data.playlists);
}

const updatePlaylist = (req, res) => {
    const playlist = data.playlists.find( plist => plist.playlistcode === req.body.playlistcode);
    if (!playlist) {
        return res.status(400).json({ 'message': `playlistcode ${req.body.playlistcode} not found`})
    }

    if (req.body.playlisttitle) playlist.playlisttitle = req.body.playlisttitle;
    if (req.body.playlistcreatedyear) playlist.playlistcreatedyear = req.body.playlistcreatedyear;
    //const filteredArray = data.playlists.filter( plist => plist.playlistcode !== req.body.playlistcode);
    //const unsortedArray = [...filteredArray, playlist];
    //data.setPlaylists(unsortedArray.sort((a, b) => a.playlistcode > b.playlistcode ? 1 : a.playlistcode < b.pl))
    res.json(data.playlists);
}

const deletePlaylist = (req,res) => {
    const playlist = data.playlists.find( plist => plist.playlistcode === req.body.playlistcode);
    if (!playlist) {
        return res.status(400).json({ 'message': `playlistcode ${req.body.playlistcode} not found`})
    }
    const filteredArray = data.playlists.filter( plist => plist.playlistcode !== req.body.playlistcode);
    data.setPlaylists([...filteredArray]);
    res.json(data.playlists);

}


const getPlaylist = (req, res) => {
    const playlist = data.playlists.find( plist => plist.playlistcode === req.params.playlistcode);
    if (!playlist) {
        return res.status(400).json({ 'message': `playlistcode ${req.params.playlistcode} not found`})
    }
    res.json(playlist);
}

module.exports = {
    getAllPlaylists,
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    getPlaylist
}

