var userInfo=$api.getStorage('userInfo');
var _$paletteElement = $('.palette_color');
if(userInfo.id){
	$('.wrapper').css('background',userInfo.Dressingbgcolor);
}

function _colorizePaletteItems(){
	$.each(_$paletteElement, function(i){
		   $(this).css('background-color', $(this).data('color'));
	})
}

function _togglePalette(){
	$('.palette_color__main').on('click', function(){
		$('.palette').toggleClass('palette__opened');
	})
}

function _initSetColor(){
	$('.palette_color').on('click', function(){
		var color = $(this).data('color');
		_setColor(color);
	})
}

function _setColor(color){
	$('.palette_color__main').css('background', color);
	$('.wrapper').css('background', color);
	
	setbgcolor(color);
}

function setbgcolor(color){
	var params={
		bgcolor:color,
		uid:userInfo.id
	}
	getajax(url+'setbgcolor',params,function(ret){
		if(ret.code==200){
			 // localStorage.setItem('userInfo',JSON.stringify( ));
			$api.setStorage('userInfo', ret.data);
			api.closeWin({
			    name: 'bgcolor'
			});
		}else{
			api.toast({
			    msg: '设置失败请联系管理员'
			});
		}
	})
}
_colorizePaletteItems();
_togglePalette();
_initSetColor();