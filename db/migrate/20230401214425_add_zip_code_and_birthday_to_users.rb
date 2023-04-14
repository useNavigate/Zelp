class AddZipCodeAndBirthdayToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :zip_code, :string, null: false
    add_column :users, :birthday, :date
  end
end
