Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV["GOOGLE_OAUTH_ID"], ENV["GOOGLE_OAUTH_SECRET"], skip_jwt: true
end
