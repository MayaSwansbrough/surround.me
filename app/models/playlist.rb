class Playlist < ApplicationRecord
  belongs_to :setlist

  def initialize(options = {})
    @playlist = RSpotify::Playlist.initialize
    
  end
end
