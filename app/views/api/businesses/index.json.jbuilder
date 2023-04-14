@businesses.each do |business|
  json.set! business.id.to_s do
    json.id business.id
    json.name business.name
    json.city business.city
    json.state business.state
    json.zipCode business.zip_code
    json.phoneNumber business.phone_number
    json.priceRange business.price_range
    json.category business.category
    json.reviews business.reviews.map(&:id)
    json.lng business.lng
    json.lat business.lat
    json.photo business.photo.url
  end
end
