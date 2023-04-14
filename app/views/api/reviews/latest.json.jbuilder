@reviews.each do |review|
  json.set! review.id.to_s do
    json.id review.id
    json.rating review.rating
    json.business_id review.business.id
    json.business_name review.business.name
    json.user_id review.user.id
    json.body review.body
    json.photo review.photo.url
    json.imageUrls review.images.map { |file| file.url }
    json.extract! review.user, :first_name, :last_name
    json.userAvatar review.user.avatar.url
  end
end
