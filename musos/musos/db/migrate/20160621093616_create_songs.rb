class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.text :name
      t.datetime :date
      t.integer :project_id
      t.text :song_notes

      t.timestamps null: false
    end
  end
end
