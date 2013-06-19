$(function(){
	$('.m23 .hc2 span').click(function(e) {
        var thisEle = $('.m23 .con p').css('font-size');
		var fontSize = parseFloat(thisEle,10);
		var unit =thisEle.slice(-2);
		var cName = $(this).attr('class');
		if(cName == 'l2'){
			if(fontSize <=22){
				fontSize += 2;
				}
			}else if(cName == 'l1'){
				if(fontSize >=12){
					fontSize -=2;
					}
				}
				$('.m23 .con p').css('font-size', fontSize+unit);
    });
})

