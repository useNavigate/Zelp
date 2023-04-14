json.extract! @review, :body, :rating, :created_at, :id
json.user_id @review.user.id
json.extract! @review.user, :first_name, :last_name
if @review.user.avatar.present?
  json.avatar_url @review.user.avatar.url
else
  json.avatar_url nil
end
json.imageUrls @review.images.map { |file| file.url }
