Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post "api/test", to: "application#test"

  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:show, :index, :create]
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :businesses, only: [:index, :create, :show, :update, :destroy] do
      get :unreviewed, on: :collection
      get :search, on: :collection
    end
    resources :reviews, only: [:index, :create, :show, :update, :destroy] do
      get :latest, on: :collection
      patch :delete_image, on: :member
    end
  end

  get "*path", to: "static_pages#frontend_index"
end
