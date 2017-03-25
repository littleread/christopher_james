require 'sinatra'

get '/' do
   send_file File.join(settings.public_folder, 'index.html')
  # erb :index
end

get '/index.html' do
  
end