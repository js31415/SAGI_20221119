Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      resources :videos
      resources :categories
    end
  end
end
