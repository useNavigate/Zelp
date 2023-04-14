# == Schema Information
#
# Table name: businesses
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip_code     :string           not null
#  phone_number :string           not null
#  price_range  :float            not null
#  category     :string           not null
#  user_id      :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  rating       :float
#  lat          :float
#  lng          :float
#  five_stars   :float
#  four_stars   :float
#  three_stars  :float
#  two_starts   :float
#  one_star     :float
#
class Business < ApplicationRecord
  validates :name, presence: true
  validates :lat, presence: true
  validates :lng, presence: true
  validates :city, presence: true
  validates :state, presence: true, length: { is: 2 }
  validates :zip_code, presence: true, length: { is: 5 }
  validates :phone_number, presence: true, length: { is: 10 }
  validates :price_range, presence: true
  validates :category, presence: true

  belongs_to :owner,
             class_name: :User,
             foreign_key: :user_id

  has_many :reviews,
           class_name: :Review,
           foreign_key: :business_id,
           dependent: :destroy

  has_many :reviewers,
           through: :reviews,
           source: :user,
           dependent: :destroy

  has_one_attached :photo

  def update_average_rating
    reviewers_count = reviewers.count
    #rails magic! update(attr:val) will update reviewers.rating =>0
    return update(rating: 0) if reviewers_count.zero?
    new_average = reviews.sum(:rating) / reviewers_count.to_f
    update(rating: new_average)
  end
end
