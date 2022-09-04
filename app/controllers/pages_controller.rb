class PagesController < ApplicationController
  before_action :set_cookies
  def index
    @amp ="/"
  end

  def thankyou
    @amp = "amp/thankyou"
  end

  def apply_social

  end

  def unsubscribe

  end

  def privacy
    @amp = "amp/privacy"
  end

  def terms_and_conditions
    @amp = "amp/terms-and-conditions"
  end

  def cookie_policy
    @amp = "amp/cookie-policy"
  end

  private
  def set_cookies
    @cookie_uuid =  cookies[:_msuuid_55417an066410] || "SS#{SecureRandom.uuid}"
    cookies[:_msuuid_55417an066410] = {
      value: @cookie_uuid,
      expires: 1.year.from_now,
      secure: false,
      httponly: false,
    }
  end

end
