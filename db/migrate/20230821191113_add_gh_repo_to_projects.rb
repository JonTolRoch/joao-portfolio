class AddGhRepoToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :gh_repo, :string
  end
end
