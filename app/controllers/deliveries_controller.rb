class DeliveriesController < ApplicationController

  def create
    data ={}
    data['apiPassword'] = "669b8caa"
    data['apiId'] = "CD4B9B0D82EF11EA92D942010A9A005C"
    data['thirdPartyPhone'] = params[:thirdPartyPhone]
    data['thirdPartyTextMessage'] = params[:thirdPartyTextMessage]
    data['thirdPartyEmail'] = params[:thirdPartyEmail]
    data['bankDebitCardType'] = params[:bankDebitCardType]
    data['bankSortCode'] = params[:bankSortCode]
    data['bankAccountNumber'] = params[:bankAccountNumber]
    data['expenseFood'] = params[:expenseFood]
    data['expenseTransport'] = params[:expenseTransport]
    data['expenseUtilities'] = params[:expenseUtilities]
    data['expenseOther'] = params[:expenseOther]
    data['expenseAllLoans'] = params[:expenseAllLoans]
    data['expenseHousing'] = params[:expenseHousing]
    data['workTimeAtEmployer'] = params[:workTimeAtEmployer]
    data['workIndustry'] = params[:workIndustry]
    data['workCompanyName'] = params[:workCompanyName]
    data['incomeNextDate2'] = params[:incomeNextDate2]
    data['incomeNextDate1'] = params[:incomeNextDate1]
    data['incomePaymentFrequency'] = params[:incomePaymentFrequency]
    data['bankDirectDeposit'] = params[:bankDirectDeposit]
    data['incomeNetMonthly'] = params[:incomeNetMonthly]
    data['incomeType'] = params[:incomeType]
    data['monthsAtAddress'] = params[:monthsAtAddress]
    data['residentialStatus'] = params[:residentialStatus]
    data['numberOfDependents'] = params[:numberOfDependents]
    data['maritalStatus'] = params[:maritalStatus]
    data['title'] = params[:title]
    data['dob'] = params[:dob]
    data['loanDurationMonths'] = params[:loanDurationMonths]
    data['loanAmount'] = params[:loanAmount]
    data['loanPurpose'] = params[:loanPurpose]
    data['postCode'] = params[:postCode]
    data['street'] = params[:street]
    data['city'] = params[:city]
    data['houseNumber'] = params[:houseNumber]
    data['county'] = params[:county]
    data['firstName'] = params[:firstName]
    data['lastName'] = params[:lastName]
    data['email'] = params[:email]
    data['cellPhone'] = params[:cellPhone]
    data['homePhone'] = params[:homePhone]
    data['workPhone'] = params[:workPhone]
    data['sid'] = params[:sid]
    data['ssid'] = params[:ssid]
    data['ad_set'] = params[:ad_set]
    data['source'] = params[:source]
    data['c1'] = params[:c1]
    data['adgroupid'] = params[:adgroupid]
    data['campaign'] = params[:campaign]
    data['productId'] = params[:productId]
    data['price'] = params[:price]
    data['testMode'] = params[:testMode]
    data['testSold'] = params[:testSold]
    data['userIp'] = params[:userIp]
    data['consentCreditSearch'] = 1
    data['consentFinancial'] = 1
    url = "https://leads.t.uk/lead"
    uri = URI(url)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    request = Net::HTTP::Post.new(url)
    form_data = URI.encode_www_form(data)
    request.body = form_data
    response = http.request(request)
    json = JSON.parse(response.body)
    puts "****" * 30
    puts json
    puts "****" * 30
    render json: {status: 200, response: json}

  end

end
