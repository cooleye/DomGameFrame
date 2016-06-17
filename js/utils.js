/**
 * id 选择器
 * */
$ = function(id){
	return document.getElementById(id);
}


/**
 * 碰撞检测
 * */
function collision(a,b){
	
	if(b.x+b.width > a.x && b.x < a.x+a.width && b.y < a.y+a.height && b.y+ b.height > a.y){
		return true;
	}

}



var hiddenProperty = 'hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {    
        console.log('页面非激活');
       Config.CurrentGameState = Config.GameState.RUNNING;
    }else{
        console.log('页面激活')
         Config.CurrentGameState = Config.GameState.PAUSED;
         
    }
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);