$(document).ready(function(){
    $('.branner-wrap').css('height', $(window).height());
    $("#link_to_active").on('click', 'li a', function () {
          $("#link_to_active li a.active").removeClass("active");
          // adding classname 'active' to current click li 
          $(this).addClass("active");
      });
});
$(window).resize(function(){
    $('.branner-wrap').css('height', $(window).height());
});

