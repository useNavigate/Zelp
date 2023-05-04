json.extract! @review, :body, :rating, :created_at, :id, :business_id

json.imageUrls @review.images.map { |file| file.url }
