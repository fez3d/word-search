Rails.application.routes.draw do
  
  get '/payment', to: "payment#payment"

  devise_for :users
  resources :users
  root "users#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
