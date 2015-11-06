class ResturantsController < ApplicationController
  require "yelp"
  Yelp.client.configure do |config|
    config.consumer_key = ENV["YELP_CONSUMER_KEY"]
    config.consumer_secret = ENV["YELP_CONSUMER_SECRET"]
    config.token = ENV["YELP_TOKEN"]
    config.token_secret = ENV["YELP_TOKEN_SECRET"]
  end

  def info
    @search = params[:search]
   @responses = Yelp.client.search("New York", { term: 'resturant', offset: 40 })
  #  responses = Yelp.client.search('East Village, NY', { term: 'resturant', offset: 40 })
   render json: @responses
  end


  def index
  end
end
