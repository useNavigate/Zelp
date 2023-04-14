class AddColumnsToBusiness < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :five_stars, :float
    add_column :businesses, :four_stars, :float
    add_column :businesses, :three_stars, :float
    add_column :businesses, :two_starts, :float
    add_column :businesses, :one_star, :float
  end
end
