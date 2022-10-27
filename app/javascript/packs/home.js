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
    // document.getElementById("loanDuration").innerHTML =  params.get("loanDurationMonths")
   
     
    $("#btn-continue").click(function(e){
      $.post("/submit_lead",
        {
          email:  params.get('email') || '',
          title:  params.get('title')  || '',
          firstname:  params.get('firstname') || '',
          lastname:  params.get('lastname') || '',
          dob: params.get('dob') || "" ,
          building: params.get('building') || "" ,
          street1: params.get('street1') || "",
          street2: params.get('street2') || "",
          towncity:  params.get('towncity') || '',
          county: params.get('county') || '',
          postcode: params.get('postcode') || "",
          country: params.get("country") || "",
          phone1:  params.get('phone1')  || '',
          company: params.get("company") || "",
          jobtitle: params.get("jobtitle") || "",
          ipaddress: params.get('ipaddress') || "",
          source:  params.get('source') ||  'google3',
          ssid:  params.get('ssid') || 1,
          gender: params.get("gender") || "",
          workindustry: params.get('workindustry') || '',
          residentialstatus: params.get('residentialstatus') || '',
          numberofdependents:  params.get('numberofdependents')  || '',
          maritalstatus:  params.get('maritalstatus') || '',
          loandurationmonths:  params.get('loandurationmonths') || "",
          loanamount: params.get('loanamount') || '',
          loanpurpose:  params.get('loanpurpose') || '',
          housename: params.get("housename") || "",
          homephone: params.get('homephone')  || '',
          workphone: params.get('workphone') || '',
          workcompanyname	: params.get("workcompanyname	") || "",
          worktimeatemployer: params.get("worktimeatemployer") || "",
          expensefood: params.get('expensefood') || '',
          expensetransport: params.get('expensetransport') || '',
          expenseutilities: params.get('expenseutilities') || '',
          expenseother: params.get('expenseother') || '',
          expenseallloans: params.get('expenseallloans') || '',
          expensehousing: params.get('expensehousing') || '',
          incomenextdate2: params.get('incomenextdate2') || '',
          incomenextdate1: params.get('incomenextdate1') || '',
          incomepaymentfrequency: params.get('incomepaymentfrequency') || '',
          incomenetmonthly: params.get('incomenetmonthly') || '',
          incometype: params.get('incometype  ') || '',
          monthsataddress:  params.get('monthsataddress') || '',
          sid:  params.get('sid') || 1,
        },
          function(data, status){
            debugger
            if(data.data.code == 1)
              window.location.replace(window.location.origin + "/precheck_thankyou");
            else
              alert("error: " + data.data.info.code + ". status: "+ data.data.info.status)
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
