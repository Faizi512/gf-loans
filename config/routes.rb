Rails.application.routes.draw do
  get 'pages/index'
  get '/thankyou' => 'pages#thankyou'
  get '/apply-social' => 'pages#apply_social'
  get '/apply-google' => 'pages#apply_google'
  get '/step_form' => 'pages#step_form'
  get '/amp' => 'amp#index'
  get '/amp/thankyou' => 'amp#thankyou'
  get '/amp/privacy' => 'amp#privacy'
  get '/amp/terms-and-conditions' => 'amp#terms_and_conditions'
  get '/privacy' => 'pages#privacy'
  get '/terms-and-conditions' => 'pages#terms_and_conditions'
  get '/cookie-policy' => 'pages#cookie_policy'
  get '/unsubscribe' => 'pages#unsubscribe'
  get '/pre-check' => 'pages#pre_check'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'
  resources :deliveries
end
