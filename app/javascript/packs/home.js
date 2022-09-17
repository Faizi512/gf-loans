import Common from "./common.js"
import 'parsleyjs'

class Home extends Common {
  constructor() {
    super();
    var CI = this;
    this.validate("#loans-form");

    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 600) {
        $('.floting-icon').fadeIn();
      } else {
        $('.floting-icon').fadeOut();
      }
    });
    const params = new URLSearchParams(window.location.search)
    document.getElementById("loanDuration").innerHTML =  params.get("loanDurationMonths")
   
     
    $("#btn-continue").click(function(e){
      $.post("https://leads-inst47-client.phonexa.uk/lead/",
        {
          apiId: "AA2FCE25C4114E41B064284FA9CCDC38",
          apiPassword: "5aff2e78f2",
          dob: params.get('dob') || "" ,
          consentCreditSearch	: params.get("consentCreditSearch") || "",
          consentFinancial: params.get("consentFinancial") || "",
          thirdPartyPhone: params.get('thirdPartyPhone') || '0',
          thirdPartyTextMessage: params.get('thirdPartyTextMessage') || '0',
          thirdPartyEmail: params.get('thirdPartyEmail')  || '0',
          bankDebitCardType: params.get('bankDebitCardType') || '',
          bankSortCode:  params.get('bankSortCode') || '',
          bankAccountNumber:  params.get('bankAccountNumber') || '',
          expenseFood: params.get('expenseFood') || '',
          expenseTransport: params.get('expenseTransport') || '',
          expenseUtilities: params.get('expenseUtilities') || '',
          expenseOther: params.get('expenseOther') || '',
          expenseAllLoans: params.get('expenseAllLoans') || '',
          expenseHousing: params.get('expenseHousing') || '',
          workTimeAtEmployer: params.get('workTimeAtEmployer') || '',
          workIndustry: params.get('workIndustry') || '',
          workCompanyName: params.get('workCompanyName') || '',
          incomeNextDate2: params.get('incomeNextDate2') || '',
          incomeNextDate1: params.get('incomeNextDate1') || '',
          incomePaymentFrequency: params.get('incomePaymentFrequency') || '',
          bankDirectDeposit: params.get('bankDirectDeposit')  || '',
          incomeNetMonthly: params.get('incomeNetMonthly') || '',
          incomeType: params.get('incomeType') || '',
          monthsAtAddress:  params.get('monthsAtAddress') || '',
          residentialStatus: params.get('residentialStatus') || '',
          numberOfDependents:  params.get('numberOfDependents')  || '',
          maritalStatus:  params.get('maritalStatus') || '',
          title:  params.get('title')  || '',
          loanDurationMonths:  params.get('loanDurationMonths') || "",
          loanAmount: params.get('loanAmount') || '',
          loanPurpose:  params.get('loanPurpose') || '',
          postCode:  params.get('postCode')  || '',
          street:  params.get('street') || '',
          city:  params.get('towncity') || '',
          houseNumber:  params.get('flatNumber') || '',
          county: params.get('county') || '',
          firstName:  params.get('firstname') || '',
          lastName:  params.get('lastname') || '',
          email:  params.get('email') || '',
          cellPhone:  params.get('cellPhone')  || '',
          homePhone: params.get('homePhone')  || '',
          workPhone: params.get('workPhone') || '',
          userIp: params.get('userIp') || "192.168.1.1",
          sid:  params.get('sid') || 1,
          ssid:  params.get('ssid') || 1,
          ad_set: params.get('ad_set') || 1,
          source:  params.get('source') ||  'google3',
          c1:  params.get('c1') ||  params.get('bstransid') ||  params.get('transid') || '',
          adgroupid:  params.get('adgroupid') || '',
          campaign:  params.get('campaign') || '',
          productId: "4",
          price: params.get("price") || "15",
          testMode:  params.get('testMode'),
          testSold:  params.get('testSold'),
        },
          function(data, status){
            debugger
            alert("Data: " + data + "\nStatus: " + status);
          });
    })


    $(document).ready(function(){
     
    })

    $(document).ready(function(){
      var email = CI.getUrlParameter('email')
      $('.pre-pop').val(email)
    })

    $( ".close-b" ).click(function() {
      $('.modal2').hide();
    })

    $('.partner-text').click(function(){
      $('.modal2').show();
    })

    $('#customCheck1').click(function(){
      CI.ToggleCheckBox()
    })

    $('.source').val(this.getUrlParameter('source') || "MMD")
    $(".optinUrl").val(this.getUrlParameter("tPar[optIn]") || "https://getfast.loans/")
  }
  getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
  }

  ToggleCheckBox(){
    var chk2 = $("input[type='checkbox'][name='partners-input']");
    chk2.prop("checked", !chk2.prop("checked"));
  }
}
export default new Home();
