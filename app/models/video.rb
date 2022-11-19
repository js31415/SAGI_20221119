class Video < ApplicationRecord
  has_one_attached :file do  |attachable|
    attachable.variant :thumbnail, resize_to_limit: [256, 256]
  end

  belongs_to :category

  validates :title, presence: true
  validates :file, presence: true, blob: { content_type: ['video/mp4', 'video/quicktime'], size_range: 1..(200.megabytes) }
end
