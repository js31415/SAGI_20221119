Rails.configuration.after_initialize do 
    Category.find_or_create_by(name: 'Exercise')
    Category.find_or_create_by(name: 'Education')
    Category.find_or_create_by(name: 'Recipe')
end

