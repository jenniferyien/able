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
   @responses = Yelp.client.search("%#{params[:search]}%", { term: 'resturant', sort:2 })
  #  @responses = Yelp.client.search('East Village, NY', { term: 'resturant', offset: 40 })
   render json: @responses


   @responses.businesses.each do |foodPlace|
     unless Resturant.find_by(yelpurl: foodPlace.url)
       @resturant = Resturant.new
       @resturant.name = foodPlace.name
       @resturant.longitude = foodPlace.location.coordinate.longitude
       @resturant.latitude = foodPlace.location.coordinate.latitude
       @resturant.yelpreviews = foodPlace.review_count
       @resturant.foodtype = foodPlace.categories[0]
       @resturant.address = foodPlace.location.display_address
       @resturant.phone = foodPlace.phone
       @resturant.img = foodPlace.image_url
       @resturant.isopen = foodPlace.is_closed
       @resturant.yelpurl = foodPlace.url
       @resturant.yelpratingicon = foodPlace.rating
       @resturant.save!
     end
   end

  end



  def index
    @resturants = Resturant.all
  end

  def show
    @name = params[:url]
    @resturant = Resturant.find_by(phone: @name)

  end
end