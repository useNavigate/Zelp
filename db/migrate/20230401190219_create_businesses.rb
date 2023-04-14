class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.string :phone_number, null: false
      t.float :price_range, null: false
      t.string :category, null: false
      t.references :user, null: false, foreign_key: { to_table: :users }, index: true
      t.timestamps
    end
  end
end
