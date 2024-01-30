Rails.application.routes.draw do
  resources :artists
  root "artists#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  get '/auth/spotify/callback', to: 'users#spotify'

  namespace :api do
    resources :artists, only: [] do
      collection do
        post '/setlist/search', to: 'artists#search', as: 'setlist_search'
      end
    end

    resources :setlists, only: [] do
      collection do
        post :create_spotify_playlist
      end
    end
  end
end
