class ResturantsController < ApplicationController
  require "yelp"
  Yelp.client.configure do |config|
    config.consumer_key = ENV["YELP_CONSUMER_KEY"]
    config.consumer_secret = ENV["YELP_CONSUMER_SECRET"]
    config.token = ENV["YELP_TOKEN"]
    config.token_secret = ENV["YELP_TOKEN_SECRET"]
  end
  def info
   responses = Yelp.client.search('East Village, NY', { term: 'resturant', sort: 2})
   render json: responses
  end

  def index
  end

  def map

  end
end
