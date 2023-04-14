json.business do
  @businesses.each do |business|
    json.set! business.id do
      json.extract! business, :id, :name, :city, :state, :zip_code, :phone_number, :price_range, :category, :rating, :lng, :lat
      json.photo business.photo.url
      json.reviews business.reviews.map { |review| review.id }
    end
  end
end

json.reviews do
  @businesses.each do |business|
    if review = business.reviews.last #because some restaurant dont have comment so need to check if they even have comments
      json.set! business.id do
        json.extract! review, :id, :body, :rating
      end
    end
  end
end
