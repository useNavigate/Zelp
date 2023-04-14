class AddLatAndLngToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :lat, :float
    add_column :businesses, :lng, :float
  end
end
