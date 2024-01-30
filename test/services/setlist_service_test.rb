require 'test_helper'
require 'webmock/minitest'
require_relative '../../app/services/setlist_service'

class SetlistServiceTest < ActiveSupport::TestCase
  let(:artist) { Artist.new(name: 'The Beatles', mbid: 1) }
  let(:invalid_artist) { Artist.new(name: 'The Meatles', mbid: 'x') }
  
  describe SetlistService do
      before do
        @setlist_service = SetlistService.new(artist.name)
      end

    describe "#search_artist" do
      it 'returns artist data for a valid artist name' do
        stub_setlist_search_artist_request(artist.name)

        artist_data = JSON.parse(@setlist_service.search_artist(artist.name))

        assert_not_nil artist_data
        assert_equal artist.name, artist_data['artist']['name']
      end

      it 'returns nil for an invalid artist name' do
        stub_setlist_search_artist_request(invalid_artist.name, success: false)

        artist_data = @setlist_service.search_artist(invalid_artist.name)

        unless artist_data.nil?
          artist_data = JSON.parse(artist_data)
        end

        assert_nil artist_data
      end
    end

    describe '#get_last_setlist' do
      it 'returns setlist data for a valid artist id' do
        stub_setlist_get_last_setlist_request(artist.mbid)

        setlist_data = JSON.parse(@setlist_service.get_last_setlist(artist.mbid))

        assert_not_nil setlist_data
        assert_kind_of Array, setlist_data['setlist']
      end

      it 'returns nil for an invalid artist id' do
        stub_setlist_get_last_setlist_request(invalid_artist.mbid, success: false)

        setlist_data = @setlist_service.get_last_setlist(invalid_artist.mbid)

        assert_nil setlist_data
      end
    end
  end

  private

  def stub_setlist_search_artist_request(artist_name, success: true)
    stub_request(:get, 'https://api.setlist.fm/rest/1.0/search/artists')
      .with(query: { artistName: artist_name, p: 1, sort: 'relevance' })
      .to_return(status: success ? 200 : 404, body: success ? { artist: { name: artist_name } }.to_json : '')
  end

  def stub_setlist_get_last_setlist_request(artist_id, success: true)
    stub_request(:get, "https://api.setlist.fm/rest/1.0/artist/#{artist_id}/setlists")
      .to_return(status: success ? 200 : 404, body: success ? { setlist: [{}, {}] }.to_json : '')
  end
end
