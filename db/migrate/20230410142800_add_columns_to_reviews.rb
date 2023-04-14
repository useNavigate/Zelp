class AddColumnsToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :five_stars, :float, null: false
    add_column :reviews, :four_stars, :float, null: false
    add_column :reviews, :three_stars, :float, null: false
    add_column :reviews, :two_starts, :float, null: false
    add_column :reviews, :one_star, :float, null: false
  end
end
