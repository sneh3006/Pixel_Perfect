var swiper = new Swiper(".mySwiper", {
  slidesPerView: "1",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,  
  },
  breakpoints: {
    1024:{
      slidesPerView: "3",
    }
  }
  });
// $('.mySwiper').slick({
//   infinite: true,
//   slidesToShow: 1 ,
//   slidesToScroll: 3,
//   arrows:false,
//   infinite: true,
// });
// function enable_nav()
// {
//   let x=document.getElementById("mobile-nav");
//   let img=document.getElementById("logo");
//   if(x.className==="list")
//   {
//     x.className+="enable";
//     img.src="/images/icons/x.svg";
//   }
//   else{
//     x.className="list";
//     img.src="/images/icons/list.svg"
//   }
// }