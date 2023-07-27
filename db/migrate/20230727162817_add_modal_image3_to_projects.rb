class AddModalImage3ToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :modal_image_3, :string
  end
end
