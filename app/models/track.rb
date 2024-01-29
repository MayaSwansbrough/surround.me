class Track < ApplicationRecord
  belongs_to :setlist
  
  def self.new_from_spotify_track(spotify_track)
    Track.new(
      spotify_id: spotify_track.id,
      name: spotify_track.name,
      artists: spotify_track.artists.first.name,
      image: spotify_track.album.images.first["url"],
      preview: spotify_track.preview_url
    )
  end

  def self.create_from_spotify_track(spotify_track)
    track = self.new_from_spotify_track(spotify_track)
    track.save
    track
  end

end
