class Video < ApplicationRecord
  has_one_attached :file

  belongs_to :category

  validates :title, presence: true
end
