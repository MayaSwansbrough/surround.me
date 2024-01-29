class AddGenreTouringCreatedAtUpdatedAtMbidToArtists < ActiveRecord::Migration[7.1]
  def change
    add_column :artists, :touring, :boolean
    add_column :artists, :mbid, :integer
  end
end
