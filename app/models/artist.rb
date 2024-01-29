class Artist < ApplicationRecord
  has_many :setlists
  attr_accessor :name, :mbid

  def initialize(attr = {})
    @name = attr[:name]
    @mbid = attr[:mbid]
  end

end
