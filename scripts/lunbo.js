//轮播图效果

$(function(){
	var $imgrolls = $("#banner div a");
	//$imgrolls.css("opacity","0.7");
	var len = $imgrolls.length;
	var index = 0;
	var adTimer = null;
	$imgrolls.mouseover(function(){
    index = $imgrolls.index(this);
    showImg(index);
	}).eq(0).mouseover();
	//滑入 停止动画，滑出开始动画
	$('#banner').hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer = setInterval(function(){
			showImg(index);
			index++;
			if (index==len) {index=0;}
		},2000);
		}).trigger("mouseleave");
	
	})

    //显示不同的幻灯片
    function showImg(index){
      var $rollobj = $("#banner");
      var $rolllist = $rollobj.find("div a");
      var newhref = $rolllist.eq(index).attr("href");
      $("#JS_imgWrap").attr('href', newhref)
                      .find('img').eq(index).stop(true, true).fadeIn()
                      .siblings().fadeOut();
      $rolllist.removeClass("chos").css("background","#fff")
               .eq(index).addClass("chos").css("background","none");

    }


