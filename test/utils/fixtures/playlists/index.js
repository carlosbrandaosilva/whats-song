const Chance = require('chance');

const chance = new Chance();

const getPlaylistsByCategory = (data = {}) => {
  const playlists = {
    playlists: {
      href: data.href || chance.url(),
      items: data.items || [
        {
          collaborative: data.collaborative || false,
          description: data.description || chance.word(),
          external_urls: data.external_urls || {
            spotify: chance.url()
          },
          href: data.itemHref || chance.url(),
          id: chance.hash(),
          images: data.images || [
            {
              height: null,
              url: chance.url(),
              width: null
            }
          ],
          name: data.name || chance.name(),
          owner: data.owner || {
            display_name: "Spotify",
            external_urls: {
              spotify: chance.url()
            },
            href: chance.url(),
            id: "spotify",
            type: "user",
            uri: "spotify:user:spotify"
          },
          primary_color: null,
          public: null,
          snapshot_id: data.snapshot_id || chance.hash(),
          tracks: data.tracks || {
            href: chance.url(),
            total: 50
          },
          type: 'playlist',
          uri: 'spotify:playlist:37i9dQZF1DXcBWIGoYBM5M'
        }
      ],
      limit: 20,
      next: null,
      offset: 0,
      previous: null,
      total: 2
    }
  }
  return playlists;
};

module.exports = {
  getPlaylistsByCategory
};
