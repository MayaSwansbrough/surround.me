class Api::ArtistsController < ApplicationController
  before_action :set_artist_data

  def search
    if @artist_data
      CreateSpotifyPlaylistJob.perform_now(first_setlist)
      render json: { artist: artist, setlist: first_setlist }
    else
      render json: { error: 'Artist not found' }
    end
  end

  def spotify_callback
    auth = request.env['omniauth.auth']
    user = RSpotify::User.new(auth)

    render json: { success: true }
  end

  def spotify_auth
    redirect_to '/auth/spotify'
  end

  private

  def set_artist_data
    artist_name = params[:name]
  setlist_service = SetlistService.new(Rails.application.config.setlist_fm_api_key)
    @artist_data = setlist_service.search_artist(artist_name)

    if @artist_data
      @artist_id = @artist_data['artist'].first['mbid']
      @setlist_data = setlist_service.get_last_setlist(@artist_id)
    end
  end

  def artist
    @artist_data['artist'].first
  end

  def first_setlist
    @setlist_data['setlist'].first
  end
end