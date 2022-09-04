
class Common {
  constructor() {
    var CI = this;
    this.currentTab = 0;
    this.formValidation = {}
    this.ip_Address = '';

    window.Parsley.on('field:error', function() {
      $(".btn-progress").removeClass("in-progress")
    });

    window.FontAwesomeConfig = {
      searchPseudoElements: true
    }
  }

  validate(form){
    this.formValidation = $("#loans-form").parsley({
        trigger: "focusout",
        errorClass: 'error',
        successClass: 'valid',
        errorsWrapper: '<div class="parsley-error-list"></div>',
        errorTemplate: '<label class="error"></label>',
        errorsContainer (field) {
          if(field.$element.hasClass('approve')){
            return $('.error-box')
          }
          return field.$element.parent()
        },
    })
    this.validateEmail()
  }

  validateEmail(){
    var CI = this
    window.Parsley.addValidator('validemail', {
      validateString: function(value){
        var xhr = $.ajax('https://go.webformsubmit.com/dukeleads/restapi/v1.2/validate/email?key=50f64816a3eda24ab9ecf6c265cae858&value='+ value)
        return xhr.then(function(json) {
          if (json.status == "Valid") {
            CI.isEmail = true
            return true
          }else{
            return $.Deferred().reject("Please Enter Valid Email Address");
          }
        })
      },
      messages: {
         en: 'Please Enter Valid Email Address',
      }
    });
  }

  showCircle(){
    $(".btn-progress").addClass("in-progress")
  }

  getData() {
    var day = $( "#dayOfBirth option:selected" ).val();
    var month = $( "#monthOfBirth option:selected" ).val();
    var year = $( "#yearOfBirth option:selected" ).val();
    var dateofbirth = year + "/" + month + "/" +day;
    return {
      thirdPartyPhone: $("input[name='thirdPartyPhone']:checked"). val() || '0',
      thirdPartyTextMessage: $("input[name='thirdPartyTextMessage']:checked"). val() || '0',
      thirdPartyEmail: $("input[name='thirdPartyEmail']:checked"). val() || '0',
      bankDebitCardType:this.getUrlParameter('bankDebitCardType') || $("input[name='bankDebitCardType']:checked"). val() || '',
      bankSortCode:this.getUrlParameter('bankSortCode') || $(".bankSortCode").val() || '',
      bankAccountNumber:this.getUrlParameter('bankAccountNumber') || $(".bankAccountNumber").val() || '',
      expenseFood:this.getUrlParameter('expenseFood') || $(".expenseFood").val() || '',
      expenseTransport:this.getUrlParameter('expenseTransport') || $(".expenseTransport").val() || '',
      expenseUtilities:this.getUrlParameter('expenseUtilities') || $(".expenseUtilities").val() || '',
      expenseOther:this.getUrlParameter('expenseOther') || $(".expenseOther").val() || '',
      expenseAllLoans:this.getUrlParameter('expenseAllLoans') || $(".expenseAllLoans").val() || '',
      expenseHousing:this.getUrlParameter('expenseHousing') || $(".expenseHousing").val() || '',
      workTimeAtEmployer:this.getUrlParameter('workTimeAtEmployer') || $( "#workTimeAtEmployer option:selected" ).val() || '',
      workIndustry:this.getUrlParameter('workIndustry') || $( "#workIndustry option:selected" ).val() || '',
      workCompanyName:this.getUrlParameter('workCompanyName') || $(".workCompanyName").val() || '',
      incomeNextDate2:this.getUrlParameter('incomeNextDate2') || $(".incomeNextDate2").val() || '',
      incomeNextDate1:this.getUrlParameter('incomeNextDate1') || $(".incomeNextDate1").val() || '',
      incomePaymentFrequency:this.getUrlParameter('incomePaymentFrequency') || $( "#incomePaymentFrequency option:selected" ).val() || '',
      bankDirectDeposit:this.getUrlParameter('bankDirectDeposit') || $("input[name='bankDirectDeposit']:checked"). val() || '',
      incomeNetMonthly:this.getUrlParameter('incomeNetMonthly') || $("input[name='incomeNetMonthly']"). val() || '',
      incomeType:this.getUrlParameter('incomeType') || $( "#incomeType option:selected" ).val() || '',
      monthsAtAddress: this.getUrlParameter('monthsAtAddress') || $( "#monthsAtAddress option:selected" ).val() || '',
      residentialStatus:this.getUrlParameter('residentialStatus') || $("input[name='residential-status']:checked"). val() || '',
      numberOfDependents: this.getUrlParameter('numberOfDependents') || $( "#dependents option:selected" ).val() || '',
      maritalStatus: this.getUrlParameter('maritalStatus') || $("input[name='merital-status']:checked"). val() || '',
      title: this.getUrlParameter('title') || $("input[name='title']:checked"). val() || '',
      dob:dateofbirth,
      loanDurationMonths: this.getUrlParameter('loan_duration_months') || "",
      loanAmount:this.getUrlParameter('loan_amount') || $("input[name='loan_amount']"). val() || '',
      loanPurpose: this.getUrlParameter('loanPurpose') || $( "#loan_purpose option:selected" ).val() || '',
      postCode: this.getUrlParameter('postcode') || $(".postcode").val() || '',
      street: this.getUrlParameter('street1') || $(".street").val() || '',
      city: this.getUrlParameter('towncity') || $(".city").val() || '',
      houseNumber: this.getUrlParameter('flatNumber') || $(".flatNumber").val() || '',
      county:this.getUrlParameter('county') || $(".county").val() || '',
      firstName: this.getUrlParameter('firstname') || $(".first_name").val() || '',
      lastName: this.getUrlParameter('lastname') || $(".last_name").val() || '',
      email: this.getUrlParameter('email') || $("input[name='email']").val() || '',
      cellPhone: this.getUrlParameter('phone1') || $(".phone").val() || '',
      homePhone:this.getUrlParameter('homePhone') || $(".homePhone").val() || '',
      workPhone:this.getUrlParameter('workPhone') || $(".workPhone").val() || '',
      userIp: this.ip_Address|| "192.168.1.1",
      sid: this.getUrlParameter('sid') || 1,
      ssid: this.getUrlParameter('ssid') || 1,
      ad_set:this.getUrlParameter('ad_set') || 1,
      source: this.getUrlParameter('source') ||  'google3',
      c1: this.getUrlParameter('c1') || this.getUrlParameter('bstransid') || this.getUrlParameter('transid') || '',
      adgroupid: this.getUrlParameter('adgroupid') || '',
      campaign: this.getUrlParameter('campaign') || '',
      productId: "4",
      price: "15",
      testMode: this.getUrlParameter('testMode'),
      testSold: this.getUrlParameter('testSold'),
    };
  }

  showloader(){
    var CI = this;
    $(".progress-head").hide()
    $("#myNav").css('height', '100%')
  }

}
export default Common;

