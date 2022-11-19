require 'rails_helper'

RSpec.describe Video, type: :model do
  describe 'associations' do
    it { should belong_to(:category) }
  end

  describe 'validations' do
    it { should validate_presence_of(:title) }
  end

  describe 'active storage' do 
    it { should have_one_attached(:file) }
  end

end
