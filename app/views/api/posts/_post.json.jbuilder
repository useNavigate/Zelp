json.extract! post, :id, :title
json.photoUrl post.photo.attached? ? post.photo.url : nil
json.imageUrls post.images.map { |file| file.url } # # <-- ADD THIS LINE
