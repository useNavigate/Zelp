@businesses.each do |business|
  json.set! business.id.to_s do
    json.id business.id
    json.name business.name
    json.city business.city
    json.state business.state
    json.zip_code business.zip_code
    json.phone_number business.phone_number
    json.price_range business.price_range
    json.category business.category
    json.lng business.lng
    json.lat business.lat
    json.photo business.photo.url
  end
end
