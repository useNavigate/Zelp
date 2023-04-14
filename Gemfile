source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }
gem "bcrypt"
gem "jbuilder"
gem "activestorage"
gem "actiontext"
gem "aws-sdk-s3"

ruby "3.1.1"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.4", ">= 7.0.4.3"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem "rack-cors"

gem "faker"
group :development, :test do
  gem "byebug", platforms: %i[ mri mingw x64_mingw ]
end
group :development do
  gem "annotate"
  gem "pry-rails"
  gem "better_errors"
  gem "binding_of_caller"
end
