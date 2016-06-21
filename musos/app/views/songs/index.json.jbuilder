json.array!(@songs) do |song|
  json.extract! song, :id, :name, :date, :project_id, :song_notes
  json.url song_url(song, format: :json)
end
