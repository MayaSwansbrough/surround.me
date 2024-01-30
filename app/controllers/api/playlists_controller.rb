class Api::ArtistsController < ApplicationController
  def search
    artist_name = params[:name]
    setlist_service = SetlistService.new(Rails.application.config.setlist_fm_api_key)

    artist_data = setlist_service.search_artist(artist_name)

    if artist_data && (artist_id = artist_data.dig('artist', 'mbid'))
      setlist_data = setlist_service.get_last_setlist(artist_id)

      render json: { artist: artist_data, setlist: setlist_data }
    else
      render json: { error: 'Artist not found' }, status: not_found
    end
  end
end
