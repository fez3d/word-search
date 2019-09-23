require 'rails_helper'

RSpec.describe PaymentController, type: :controller do

  describe "GET #payment" do
    it "returns http success" do
      get :payment
      expect(response).to have_http_status(:success)
    end
  end

end
