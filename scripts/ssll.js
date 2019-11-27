$(function(){
		//自动轮播
	var $yw=$(".imglist li");
	var len=$yw.length;
	var ywWidth=$yw.width();
	var index=0;
	var $ywbj=$(".imglist");
	
	$(".aleft").click(function() {
		if(!$ywbj.is(":animated")){
			if (index == 0) {
				index=len-3;
				showyw(index);
			}else{
				index--;
				showyw(index);
			}
		}
	})

	$(".aright").click(function() {
		if(!$ywbj.is(":animated")){
			if (index == len-3) {
				index=0;
				showyw(index);
			}else{
				index++;
				showyw(index);
			}
		}
	})
})

//显示不同的模块
function showyw(index){
	var $ywbj=$(".imglist");
	var ywWidth=$(".imglist li").width();
	var ywOuwidth=$(".imglist li").outerWidth();

	ywWidth=ywWidth+70;
	 // rollWidth=rollWidth;//一个版面的宽度
	 $ywbj.animate({left:-(ywWidth*index)},500);
	}
