class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.text :name
      t.text :description
      t.datetime :date
      t.integer :user_id
      t.integer :song_id

      t.timestamps null: false
    end
  end
end
