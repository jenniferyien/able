class CreateResturants < ActiveRecord::Migration
  def change
    create_table :resturants do |t|
      t.string :name
      t.string :reviews
      t.float :longitude
      t.float :latitude
      t.string :yelpreviews
      t.string :foodtype
      t.string :address
      t.string :phone
      t.string :img
      t.string :isopen
      t.string :yelpurl
      t.string :yelpratingicon

      t.timestamps null: false
    end
  end
end
