
$(document).ready(function(){

      //mouse
      
      var cursor = $(".cursor"),
          follower = $(".cursor_follower"),
          positionX = 0,
          positionY = 0,
          mouseX = 0,     //마우스 X축 좌표 값
          mouseY = 0;     //마우스 Y축 좌표 값

      $(document).mousemove(function(e){
          mouseX = e.pageX;
          mouseY = e.pageY;

      //    positionX += (mouseX - positionX) / 9;
      //    positionY += (mouseY - positionY) / 9;

      //    cursor.css("left", mouseX).css("top", mouseY);
      //    follower.css("left", positionX).css("top", positionY);
      });

      TweenMax.to({},0.016,{
          repeat: -1,
          onRepeat: function(){
              positionX += (mouseX - positionX) / 9;
              positionY += (mouseY - positionY) / 9;

              TweenMax.set(cursor,{
                  css: {
                      left: mouseX-4,
                      top: mouseY-4
                  }
              });

              TweenMax.set(follower,{
                  css: {
                      left: positionX - 11,
                      top: positionY - 11
                  }
              });
          }
      });

      $(".profile_text, .responsive_web_slide, .design_btn, .site_view").mouseenter(function(){
            follower.addClass("active");      
      });
      
      $(".profile_text, .responsive_web_slide, .design_btn, .site_view").mouseleave(function(){
             follower.removeClass("active"); 
      });

                  
      
      //nav bar
      
      $(".hamburger").click(function(){
          $(this).toggleClass("active")
      });
      
      $(".hamburger").click(function(){
          $("body").toggleClass("nav_active");
      });
      
      $(".nav_list").click(function(){
          $("body").removeClass("nav_active");
          $(".hamburger").removeClass("active");
      });

      
      $(".nav_list a").hover(function(){
            $(this).next().show().css({"opacity":0.4,"transition":"opacity .9s"});
      },function(){
            $(this).next().hide();
      });
      

      //scroll

      $(window).scroll(function() {
            
               var wScroll= $(this).scrollTop();

              if (wScroll >= $(".skill_ul").offset().top - $(window).height() / 1.3) {
                    $(".skills").addClass("active");
                }
                if (wScroll >= $(".skill_ul").offset().top - $(window).height() / 1.3) {
                    $(".skills2").addClass("active");
                }
            
                if (wScroll >= $(".site1").offset().top - $(window).height() / 1.3) {
                    $(".site1").addClass("active");
                }
                if (wScroll >= $(".site2").offset().top - $(window).height() / 1.3) {
                    $(".site2").addClass("active");
                }
                if (wScroll >= $(".mobile_in").offset().top - $(window).height() / 1.5) {
                    $(".mobile_in").addClass("active");
                }
                if (wScroll >= $("footer").offset().top - $(window).height() +100) {
                    $("footer").addClass("active");
                }

      }); 
      
      
      //webstandard popup
     $(".design_btn").click(function(){
	   $(this).next().show();
	   $("html").css({overflowY:"hidden"});  
           return false;
     });
    
    
     $(".x").click(function(){
	   $(".design_pop").hide();
	   $("html").css({overflowY:"scroll"});
     });
    
    
      //responsive{
      $(".slide1").hover(function(){
            $(".responsive_txt3").stop(true,true).animate({top:0},500);
      },function(){
            $(".responsive_txt3").stop(true,true).animate({top:"-110%"},500);
      });
       $(".slide2").hover(function(){
            $(".responsive_txt1").stop(true,true).animate({left:0},500);
      },function(){
            $(".responsive_txt1").stop(true,true).animate({left:"-110%"},500);
      });
     $(".slide3").hover(function(){
            $(".responsive_txt4").stop(true,true).animate({left:0},500);
      },function(){
            $(".responsive_txt4").stop(true,true).animate({left:"110%"},500);
      });
      $(".slide4").hover(function(){
            $(".responsive_txt2").stop(true,true).animate({top:0},500);
      },function(){
            $(".responsive_txt2").stop(true,true).animate({top:"100%"},500);
      });
      
      
      //mobile popup
      
      $(".mobile_btn .btn1").click(function(){
            
            $(".popup").show();
            $("html").css({overflowY:"hidden"});
            return false;
            
      });
      
      $(".mobile_btn .btn2").click(function(){
            
            $(".popup2").show();
            $("html").css({overflowY:"hidden"});
            return false;
            
      });
      
      $(".white_close").click(function(){
            
            $(".popup, .popup2").hide();
            $("html").css({overflowY:"scroll"});
            
      });
      
      
      $("iframe").attr('src','http://webpaper4.dothome.co.kr/megabox');
      
      
      
      
      
});