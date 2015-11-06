class SessionsController < ApplicationController
  def create
    unless @user = User.find_by(uid: request.env['omniauth.auth']['uid'])
      @user = User.new
      @user.provider = request.env['omniauth.auth']['provider']
      @user.first_name = request.env['omniauth.auth']['info']['first_name']
      @user.image_url = request.env['omniauth.auth']['info']['image']
      @user.email = request.env['omniauth.auth']['info']['email']
      @user.oauth_token = request.env['omniauth.auth']['credentials']['token']
      @user.oauth_expires_at = request.env['omniauth.auth']['credentials']['expires_at']
      @user.uid = request.env['omniauth.auth']['uid']
      @user.save!
    end
    session[:uid] = @user.id
    redirect_to '/'
  end

  def destroy
    session[:uid] = nil
    redirect_to '/'
  end
end
