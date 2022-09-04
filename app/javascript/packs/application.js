
import 'src/application.scss'
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("popper.js")
require("rangeslider.js")
import "./woco.accordion.min.js"
import "./bootstrap.js"
import WOW from "./wow.js"


$(() => {
  $(".accordion").accordion()
   new WOW().init();
  var valueBubble = '<output class="rangeslider__value-bubble" />';

  function updateValueBubble(e, l, a) {
      e = e || a.position, l = l || a.value;
      var n = $(".rangeslider__value-bubble", a.$range),
          u = e + a.grabPos,
          i = u <= a.handleDimension ? a.handleDimension : u >= a.maxHandlePos ? a.maxHandlePos : u;
      n.length && (n[0].style.left = Math.ceil(i) + "px", n[0].innerHTML = l)
  }
  $('input[type="range"]').rangeslider({
      polyfill: false,
      onInit: function() {
          this.$range.append($(valueBubble)), updateValueBubble(null, "&#163;500", this)
      },
      onSlide: function(e, l) {
          $('input[type="range"]').data().plugin_rangeslider.step = 100
          updateValueBubble(e, "&#163;" + l, this)
      }
  }), $(document).ready(function() {
      $(".formouter ul li").click(function() {
          $(".formouter ul li").removeClass("active"), $(this).addClass("active")
      })
  });
})
