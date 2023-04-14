class RemoveStarsFromBusiness < ActiveRecord::Migration[7.0]
  def change
    remove_column :businesses, :five_stars, :float
    remove_column :businesses, :four_stars, :float
    remove_column :businesses, :three_stars, :float
    remove_column :businesses, :two_starts, :float
    remove_column :businesses, :one_star, :float
  end
end
