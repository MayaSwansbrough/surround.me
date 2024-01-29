class SetlistService
  include HTTParty

  base_uri 'https://api.setlist.fm/rest/1.0'

  def initialize(api_key)
    @api_key = ENV['SETLIST_FM_KEY']
  end

  def search_artist(artist_name)
    response = self.class.get('/search/artists', query: { artistName: artist_name, p: 1, sort: 'relevance' }, headers: headers)
    handle_response(response)
  end

  def get_last_setlist(artist_id)
    response = self.class.get("/artist/#{artist_id}/setlists", headers: headers)
    handle_response(response)
  end

  private

  def headers
    {
      'Accept' => 'application/json',
      'x-api-key' => @api_key
    }
  end

  def handle_response(response)
    return response.parsed_response if response.success?

  #Rescue here
  end

end
