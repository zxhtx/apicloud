document.write('<script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>')

$(function() {
	var userInfo = JSON.parse(localStorage.getItem('userInfo'));
	if($.cookie("ts") && userInfo){
		if($.cookie("ts")!=0){
			$('.navnoreadcount').text($.cookie("ts"));
			$('.navnoreadcount').css('display','block');
		}
			
		}else{
			$('.navnoreadcount').text('');
			$('.navnoreadcount').css('display','none');
		}
	clickevent();
	
	function clickevent() {
		$('.chaodashe').click(function(event) {
			event.stopPropagation();
			// $.cookie('navname', 'chaodashe');
			window.location.href = "../html/chaodashe_frame.php";

		})
		$('.shangc').click(function(event) {
			event.stopPropagation();

			// $.cookie('navname', 'shangc');
			window.location.href = "../html/home_frame.php";


		})
		$('.saybug').click(function(event) {
			event.stopPropagation();
			// $.cookie('navname', 'shouchang');
			window.location.href = "../html/saybug.php";


		})
		$('.my').click(function(event) {
			event.stopPropagation();
			$.cookie('navname', 'my');
			window.location.href = "../html/my_frame.php";



		})
		$('.chat').click(function(event) {
			event.stopPropagation();
			
			// $.cookie('navname', 'chat');
			if (!userInfo) {
				$.cookie('navname', 'chaodashe');
				window.location.href = "../html/login_frame.html";
			} else {
				window.location.href = "../html/chat_lists.php?" + window.btoa(encodeURI("fromid=" + userInfo.id));
			}



		})

	}
	var fromid='';
	var ws=new WebSocket("ws://socket.chaodashe.com:8282");
	ws.onmessage=function(e){
		if(!userInfo){return;}else{fromid=userInfo.id};
		var message=eval("("+e.data+")");
		switch(message.type){
			case 'init':
			// alert(1);
			// alert($.cookie("ts"))
			
				var bild='{"type":"bind","fromid":"'+fromid+'"}';
				ws.send(bild);
				
				setTimeout(function(){
					getNoreadcount();
				},2000)
				// alert(1)
				
			return;
			case 'text':
			setTimeout(function(){
				getNoreadcount();
			},2000)
			return;
			
			case 'img':
			setTimeout(function(){
				getNoreadcount();
			},2000)
			return;
			
			
		}
	}
	
	function getNoreadcount(){
		
		postajax(url+'chat_allNoreadcount',{'fromid':fromid},function(e){
			if(e>0){
				
				$('.navnoreadcount').text(e);
				$('.navnoreadcount').css('display','block');
				$.cookie("ts",e);
				  
			}else{
				$.cookie("ts",e);
				// $('.navnoreadcount').text(e);
				$('.navnoreadcount').css('display','none');
			}
			
		})
	}
	
	
	
})
