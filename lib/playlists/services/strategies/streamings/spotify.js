const { getToken, getPlayListsByCategory, getPlayListTracks } = require('../../../../clients/spotify');
const { logger } = require('../../../../utils')

const execute = async (categoryId) => {
  const playlistDefault = process.env.PLAYLIST_SPOTIFY_DEFAULT;
  const { token, statusCode: tokenStatusCode } = await getToken();
  if (tokenStatusCode !== 200) {
    logger.error(`Error on get token bearer, statusCode: ${statusCodeToken}, error: ${token}`)
    return playlistDefault;
  }
  const tokenBearer = token.access_token;
  const { playlists, statusCode: playListStatusCode } = await getPlayListsByCategory(tokenBearer, categoryId);
  if (playListStatusCode !== 200) {
    logger.error(`Error on get playlists, statusCode: ${statusCodePlayList}, category: ${categoryId}, error: ${playlists}`)
    return playlistDefault;
  }
  const [ playList ] = playlists.items;
  const { tracks, statusCode: tracksStatusCode } = await getPlayListTracks(tokenBearer, playList.id);
  if (tracksStatusCode !== 200) {
    logger.error(`Error on get playlist tracks, statusCode: ${tracksStatusCode}, error: ${tracks}`)
    return playlistDefault;
  }
  const result = tracks.items.map((item) => ({
    name: item.track.name,
    link: item.track.external_urls.spotify
  }));
  return result;
};

module.exports = { execute };