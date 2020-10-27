

    
 // var url='http://www.chaoxi.com/';
 var url='http://api.chaodashe.com/index.php/';
  var userInfo=$api.getStorage('userInfo')?$api.getStorage('userInfo'):0;
 var imgurl='http://img.chaodashe.com/';
  // var headimgurl='http://www.666.com/chaoxiapi/';
 //  var now = Date.now();
 //  var appKey = SHA1("A6099267504667"+"UZ"+"8FC0173C-B395-B797-D516-7A6CD23939B3"+"UZ"+now)+"."+now;
 //  var header={
 //   "X-APICloud-AppId": "A6099267504667",
 //   "X-APICloud-AppKey":   appKey
 // }
 // if ($api.getStorage('userInfo')) {
  
 // }
 var AppVersion='0.14';
 var userInfo=$api.getStorage('userInfo')?$api.getStorage('userInfo'):0;
 var header={
  "Token":$api.getStorage('token') ? $api.getStorage('token') : 0,
}

// 我的数据库
function getajax(url,data,callback){
 userInfo=$api.getStorage('userInfo')?$api.getStorage('userInfo'):0;
   if(userInfo){
     token=$api.getStorage('token');
     header={
      // 'Content-Type': 'application/json;charset=utf8',
        "Token":token,
     }
   }else{
     header='';
   }

  $.ajax({
    type: 'get',
    url: url,
    dataType: 'json',
    data:data,
    headers:header,
    success: function (data) {
       if (data.code == 403) {
        api.toast({
            msg: '登录信息失效,请重新登录'
        });
          $api.clearStorage('userInfo');
         $api.clearStorage('token');
        return;
      }
      callback(data);
    },
    error: function (data) {
      callback(data);
    },
  });

}
function postajax(url, data, callback){
   userInfo=$api.getStorage('userInfo')?$api.getStorage('userInfo'):0;
   if(userInfo){
     token=$api.getStorage('token');
     header={
      // 'Content-Type': 'application/json;charset=utf8',
        "Token":token,
     }
   }else{
     header='';
   }
  $.ajax({
    type: 'post',
    url: url,
    dataType: 'json',
    data: data,
    headers:header,
    success: function (data) {
      if (data.code == 403) {
        api.toast({
            msg: '登录信息失效,请重新登录'
        });
          $api.clearStorage('userInfo');
         $api.clearStorage('token');
        return;
      }
      callback(data);
    },
    error: function (data) {
      callback(data);
    },
  });
}
// 获取地址栏参数并解码
function getQueryString(_index) {
  var url=window.location.href; //获取当前页面的url
　　var len=url.length; //获取url的长度值
　　var a=url.indexOf("?"); //获取第一次出现？的位置下标
if (a==-1) {
  return;
}
var jiema=window.atob(url.substr(a+1,len));

　　var b=decodeURI(jiema); //截取问号之后的内容(url解码)
    // console.log(b);
　　var c=b.split("&"); //从指定的地方将字符串分割成字符串数组

　　var arr=new Array(); //新建一个数组
　　for(var i=0;i<c.length;i++){
　　　　var d=c[i].split("=")[1]; //从=处将字符串分割成字符串数组,并选择第2个元素
　　　　arr.push(d);  //将获取的元素存入到数组中  
　　}

return arr[_index];

}


function toast(text,position,time){
   $(document).dialog({
        type : 'notice',
        infoText: text,
        autoClose: 800,
        position: position  // center: 居中; bottom: 底部
    });
}
var dl;
function dialog(text){
  var doc=window;
   dl=$(doc).dialog({
        type : 'toast',
        infoIcon: '../image/icon/loading.gif',
        infoText: 'chaodashe',

    });

}

function timestampFormat( timestamp ) {
  function zeroize( num ) {
      return (String(num).length == 1 ? '0' : '') + num;
  }

  var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
  var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

  var curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
  var tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象

  var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
  var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();

  if ( timestampDiff < 60 ) { // 一分钟以内
      return "刚刚";
  } else if( timestampDiff < 3600 ) { // 一小时前之内
      return Math.floor( timestampDiff / 60 ) + "分钟前";
  } else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
      return '今天' + zeroize(H) + ':' + zeroize(i);
  } else {
      var newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
      if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
          return '昨天' + zeroize(H) + ':' + zeroize(i);
      } else if ( curDate.getFullYear() == Y ) {
          return  zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
      } else {
          return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
      }
  }
}


