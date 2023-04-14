@users.each do |user|
  json.set! user.id.to_s do
    json.id user.id
    json.first_name user.first_name
    json.last_name user.last_name
    json.email user.email
    json.zipCode user.zip_code
    json.created_at user.created_at
    json.updated_at user.updated_at
    json.reviews user.reviews.map(&:id)
    json.businesses user.businesses.map(&:id)
    json.avatar user.avatar.url
  end
end
