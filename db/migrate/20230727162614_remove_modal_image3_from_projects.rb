class RemoveModalImage3FromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :modal_image3, :string
  end
end
