class AddFieldsToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :modal_image, :string
    add_column :projects, :modal_image_2, :string
    add_column :projects, :in_depth_description, :text
  end
end
