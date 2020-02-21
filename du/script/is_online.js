apiready = function(){

        var connectionType = api.connectionType;

        api.addEventListener({
            name:'offline' // 断网了
        }, function(ret, err){
            alert('断网了');
        });

        api.addEventListener({
            name:'online' // 已经连上网络
        }, function(ret, err){
            alert('已连接到网络');
        });


    // api.setStatusBarStyle({
    //       style: 'light'
    // });

}