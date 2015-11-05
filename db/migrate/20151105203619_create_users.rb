class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :provider
      t.string :uid
      t.string :first_name
      t.string :image_url
      t.string :email
      t.string :oauth_token
      t.string :oauth_expires_at

      t.timestamps null: false
    end
  end
end
