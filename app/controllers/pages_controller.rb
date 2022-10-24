class PagesController < ApplicationController
  before_action :set_cookies
  layout "precheck", only: [:pre_check]
  skip_before_action :verify_authenticity_token, only: [:submit_lead]

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

  def pre_check
  end

  def precheck_thankyou
  end

  def submit_lead
    url = URI.parse(
            "https://dukeleads.leadbyte.co.uk/api/submit.php?
            campid=LATCH-15-LOANS&returnjson=yes&phone1=#{params[:phone1]} 
          ")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # res = Net::HTTP.get_response(url)
    data = {
      email:  params[:email],
      title:  params[:title],
      firstname:  params[:firstname] ,
      lastname:  params[:lastname] ,
      dob: params[:dob]  ,
      building: params[:building]  ,
      street1: params[:street1] ,
      street2: params[:street2] ,
      towncity:  params[:towncity] ,
      county: params[:county] ,
      postcode: params[:postcode] ,
      country: params[:country] ,
      phone1:  params[:phone1]  ,
      company: params[:company] ,
      jobtitle: params[:jobtitle] ,
      ipaddress: params[:ipaddress] ,
      source:  params[:source] ||  'google3',
      ssid:  params[:ssid] || 1,
      gender: params[:gender] ,
      workindustry: params[:workindustry] ,
      residentialstatus: params[:residentialstatus] ,
      numberofdependents:  params[:numberofdependents]  ,
      maritalstatus:  params[:maritalstatus] ,
      loandurationmonths:  params[:loandurationmonths] ,
      loanamount: params[:loanamount] ,
      loanpurpose:  params[:loanpurpose] ,
      housename: params[:housename] ,
      homephone: params[:homephone]  ,
      workphone: params[:workphone] ,
      workcompanyname: params[:workcompanyname] ,
      worktimeatemployer: params[:worktimeatemployer] ,
      expensefood: params[:expensefood] ,
      expensetransport: params[:expensetransport] ,
      expenseutilities: params[:expenseutilities] ,
      expenseother: params[:expenseother] ,
      expenseallloans: params[:expenseallloans] ,
      expensehousing: params[:expensehousing] ,
      incomenextdate2: params[:incomenextdate2] ,
      incomenextdate1: params[:incomenextdate1] ,
      incomepaymentfrequency: params[:incomepaymentfrequency],
      incomenetmonthly: params[:incomenetmonthly],
      incometype: params[:incometype  ],
      monthsataddress:  params[:monthsataddress],
      sid:  params[:sid]
    }
    request = Net::HTTP::Post.new(url, {'Content-Type' => 'application/json'} )
    request.body = data.to_json

    response = http.request(request)
    render json: {data: JSON.parse(response.body)}
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
