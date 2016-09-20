Rails.application.routes.draw do
  root to: 'questions#displayPage'
  get "/app" => 'questions#displayPage' 

  devise_for :users
  resources :answers
  resources :questions

  # root to: 'home#index'

end
