# app/views/api/errors/internal_server_error.json.jbuilder

json.title "Server Error"
json.message @message
json.stack @stack unless Rails.env.production?
