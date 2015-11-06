class PostsController < ApplicationController
	def create
		Post.create(comment: params[:comment], user_id: params[:user_id], resturant_id: params[:resturant_id])
	end
end