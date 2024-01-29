class CreateTracks < ActiveRecord::Migration[7.1]
  def change
    create_table :tracks do |t|
      t.string :name
      t.string :artist
      t.string :image
      t.string :preview
      t.integer :spotify_id

      t.timestamps
    end
  end
end
