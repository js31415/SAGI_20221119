require 'rails_helper'

RSpec.describe Video, type: :model do
  describe 'associations' do
    it { should belong_to(:category) }
  end

  describe 'validations' do
    it { should validate_presence_of(:title) }
  end
end
