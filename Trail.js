$(document).ready(function(){
  $(".cmp-header__first-menu-item-dropdown-list").click(function(){
      // $("ul.cmp-header__submenu-item-dropdown > li").show();
      $('.cmp-header__submenu-item-dropdown').show();
});
}); 

$(document).ready(function(){
    $(".cmp-header__mainmenu-link").click(function(){
   
    $('.cmp-header__first-menu-item-dropdown').show();
    $(".btnlogin").hide();
  });
  });

  $(document).ready(function(){
    $(".cmp-header__submenu-item-dropdown-list > p").click(function(){
        alert('clicked');
        $(".cmp-header__submenu-item-dropdown").css({"display" : "none"  
         , "position" : "absolute", "visibility": " hidden" });
  });
  });
  $(document).ready(function(){
    $(".cmp-header__first-menu-item-dropdown > p").click(function(){
        
        $(".cmp-header__first-menu-item-dropdown").hide();
        $(".btnlogin").show();
    
  });
  });
  $(document).ready(function(){
    $(".cmp-browse").click(function(){
      
        $(".cmp-header__navbar").show();
        $(".btnlogin").show();
        $(".cmp-browse").hide();
        $(".cmp-close").show();   
      
  });
  });
  $(document).ready(function(){
    $(".cmp-header-close-button").click(function(){
      $(".cmp-header__navbar").hide();
      $(".btnlogin").hide(); 
      $(".cmp-browse").show();
      $(".cmp-close").hide();   
    });
  });


//   $(".cmp-header__submenu-item-dropdown").find('*').hide();
// $(document).ready(function(){
//   if ( $(".cmp-header__mainmenu-link").click()) {
//     $('.cmp-header__submenu-item-dropdown').show();

//   }
//   else {
//     $(".cmp-header__submenu-item-dropdown").css({"display" : "none"});
//   };
// });