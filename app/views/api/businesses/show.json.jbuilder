# json.set! @business.id.to_s do

json.business do
  json.extract! @business, :name, :id, :city, :state, :zip_code, :phone_number, :price_range, :category, :rating, :lng, :lat
  json.photo @business.photo.url

  json.reviews @business.reviews.map { |review| review.id }
end

json.reviews do
  @business.reviews.each do |review|
    json.set! review.id.to_s do
      json.user_id review.user.id
      json.extract! review.user, :first_name, :last_name
      if review.user.avatar.present?
        json.avatar_url review.user.avatar.url
      else
        json.avatar_url nil
      end
      json.imageUrls review.images.map { |file| file.url }
      json.extract! review, :body, :rating, :created_at, :id
    end
  end
end
