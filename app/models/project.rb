# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  name        :text
#  description :text
#  date        :datetime
#  user_id     :integer
#  song_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ActiveRecord::Base
  has_and_belongs_to_many :users
end
