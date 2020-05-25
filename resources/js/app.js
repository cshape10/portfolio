function toggleX(x) {
  x.classList.toggle("change");
  console.log(x);
}

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 6
  });
});