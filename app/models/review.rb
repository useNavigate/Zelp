# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  business_id :bigint           not null
#  user_id     :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :body, presence: true
  validates :rating, presence: true

  belongs_to :business
  belongs_to :user

  has_one_attached :photo
  has_many_attached :images

  private

  def update_average_rating
    business.update_average_rating
  end
end
