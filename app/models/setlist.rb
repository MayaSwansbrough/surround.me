class Setlist < ApplicationRecord
  belongs_to :artist
  has_many :tracks
  has_one :playlist
  
end
