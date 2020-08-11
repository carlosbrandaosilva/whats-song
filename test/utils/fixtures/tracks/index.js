const Chance = require('chance');

const chance = new Chance();

const create = (data = {}) => {
  const tracks = {
    href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks?offset=0&limit=100',
    items: [
      {
        track: {
          external_urls: {
            spotify: 'https://open.spotify.com/track/6UelLqGlWMcVH1E5c4H7lY'
          },
          name: 'Watermelon Sugar'
        }
      },
      {
        track: {
          external_urls: {
            spotify: 'https://open.spotify.com/track/7ytR5pFWmSjzHJIeQkgog4'
          },
          name: 'ROCKSTAR (feat. Roddy Ricch)'
        }
      }
    ]
  }
  return tracks;
};

module.exports = {
  create
};
