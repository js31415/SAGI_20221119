class VideoSerializer < ActiveModel::Serializer
    include Rails.application.routes.url_helpers
    
    attributes :id, :title
  
    belongs_to :category

    # attribute :thumbnail_url do
    #     url_for(object.file.preview(resize_to_limit: [256, 256]))
    # end

    attribute :file_url do
        url_for(object.file)
    end
end