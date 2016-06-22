json.array!(@projects) do |project|
  json.extract! project, :id, :name, :description, :date, :user_id, :song_id
  json.url project_url(project, format: :json)
end
