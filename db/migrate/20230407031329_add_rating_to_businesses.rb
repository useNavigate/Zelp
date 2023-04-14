class AddRatingToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :rating, :float
    add_index :businesses, :rating
  end
end
