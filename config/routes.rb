Rails.application.routes.draw do
  get 'contact_form/new'
  get 'contact_form/create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
   root "projects#index"
end
