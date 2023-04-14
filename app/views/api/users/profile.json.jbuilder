json.user do
  json.extract! @user, :id, :email, :first_name, :last_name, :birthday, :zip_code, :created_at, :updated_at
  json.avatar @user.avatar.url
  json.reviews @user.reviews.map(&:id)
end
