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
