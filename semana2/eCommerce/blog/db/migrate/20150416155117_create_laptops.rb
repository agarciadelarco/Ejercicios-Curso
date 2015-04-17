class CreateLaptops < ActiveRecord::Migration
  def change
    create_table :laptops do |t|
      t.string :brand
      t.string :model
      t.string :processor
      t.integer :ram
      t.float :price

      t.timestamps null: false
    end
  end
end
