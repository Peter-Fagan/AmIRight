Rails.application.routes.draw do
  root to: 'questions#index'

  devise_for :users
  resources :answers
  resources :questions

  # root to: 'home#index'

end
