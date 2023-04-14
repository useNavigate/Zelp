# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  zip_code        :string           not null
#  birthday        :date
#
class User < ApplicationRecord
  before_validation :ensure_session_token
  has_secure_password
  # validates :username,
  #   uniqueness: true,
  #   presence: true,
  #   length: { in: 3..30 },
  #   format: { without: URI::MailTo::EMAIL_REGEXP, message: "can't be an email" }

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email,
            uniqueness: true,
            presence: true,
            length: { in: 3..255 },
            format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true
  validates :zip_code, length: { is: 5 }
  has_many :businesses,
           class_name: :Business,
           foreign_key: :user_id,
           dependent: :destroy

  has_many :reviews,
           class_name: :Review,
           foreign_key: :user_id,
           dependent: :destroy
  has_one_attached :avatar
  # private

  def self.find_by_credentials(email, password)
    if (URI::MailTo::EMAIL_REGEXP.match?(email))
      user = find_by(email: email)
    end
    return nil unless user
    user.authenticate(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    # self.update!(session_token: generate_unique_session_token)
    self.save!
    self.session_token
  end

  private

  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64
    end
    token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
