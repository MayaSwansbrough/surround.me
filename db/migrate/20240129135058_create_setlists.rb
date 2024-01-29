class CreateSetlists < ActiveRecord::Migration[7.1]
  def change
    create_table :setlists do |t|
      t.string :artist
      t.string :tour
      t.string :set
      t.integer :artist_id

      t.timestamps
    end
  end
end
