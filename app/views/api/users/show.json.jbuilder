json.first_name @user.first_name
json.last_name @user.last_name
json.birthday @user.birthday
json.reviews @user.reviews.map { |r| r.id }
json.business @user.businesses.map { |b| b.id }
json.avatar @user.avatar.url
