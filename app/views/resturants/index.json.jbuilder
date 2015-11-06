json.resturants do
  json.array!(@resturants) do |resturant|
    json.extract! resturant, :id, :name

  end
end
