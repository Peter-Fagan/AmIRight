json.extract! answer, :id, :content, :value, :created_at, :updated_at, :question_id
json.url answer_url(answer, format: :json)
