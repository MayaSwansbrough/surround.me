class CreateSpotifyPlaylistJob < ApplicationJob
  queue_as :default

  def perform(setlist)
    @setlist = setlist

    create_spotify_playlist
  end

  private

  def create_spotify_playlist
    songs = setlist_songs(@setlist).map do |song|
      "#{song['name']} #{@setlist['artist']['name']}"
    end

    spotify_tracks = songs.map do |song|
      RSpotify::Track.search(song).first
    end

    user = RSpotify::User.find('Saturnaliia')
    playlist = user.create_playlist!("Playlist Name", public: false)

    spotify_tracks.each do |track|
      playlist.add_tracks!([track])
    end
  end

  def setlist_songs(setlist)
    @setlist['sets'].first&.dig(1, 0, 'song') || []
  end
end
