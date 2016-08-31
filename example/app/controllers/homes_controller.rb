require 'pp'

class HomesController < ApplicationController
  require 'ringcaptcha'
  skip_before_filter :verify_authenticity_token

  def index
  end

  # method to call ringcaptcha methods.
  def valid_rc
    rcap = RingCaptcha::RingCaptcha.new(ENV['RING_CAPTCHA_APP_KEY'], ENV['RING_CAPTCHA_SECRET_KEY'])

    @rcap_valid = rcap.is_valid?(params[:param1], params[:params2])

    pp @rcap_valid

    render json: @rcap_valid
  end

end
