class RemoveStarsFromReviews < ActiveRecord::Migration[7.0]
  def change
    remove_column :reviews, :five_stars
    remove_column :reviews, :four_stars
    remove_column :reviews, :three_stars
    remove_column :reviews, :two_starts
    remove_column :reviews, :one_star
  end
end
