class Video < ApplicationRecord
  default_scope {order('created_at DESC')}
  include ActiveStorageSupport::SupportForBase64
  
  has_one_base64_attached :file

  belongs_to :category

  validates :title, presence: true
  validates :file, presence: true, blob: { content_type: ['video/mp4', 'video/quicktime'], size_range: 1..(200.megabytes) }
end
