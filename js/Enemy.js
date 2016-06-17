/**
 * 
 * 定义角色类
 * 
 * */
var Enemy = function(opts){
	Sprite.call(this,opts);
}
Enemy.prototype = new Sprite();
Enemy.prototype.constructor = Enemy;

Enemy.prototype.move = function(target){
	
	var imgNode = this.imgNode;
	
	var targetBox = target.getBoundingBox();
	var deltaX = targetBox.x + target.width/2 - imgNode.offsetLeft;
	var deltaY = targetBox.y + target.height - imgNode.offsetTop;

	if(deltaX >0){
		imgNode.style.left = imgNode.offsetLeft + Config.EnemyMoveSpeed + 'px';
	}else{
		imgNode.style.left = imgNode.offsetLeft - Config.EnemyMoveSpeed + 'px';
	}
	
	if(deltaY> 0){
		imgNode.style.top = imgNode.offsetTop + Config.EnemyMoveSpeed + 'px';
	}else{
		imgNode.style.top = imgNode.offsetTop - Config.EnemyMoveSpeed + 'px'
	}
	
	if(imgNode.offsetLeft < 0){
		
		var parentNode = imgNode.parentNode;
		
		parentNode.removeChild(imgNode);
		
		var index = Config.Enemies.indexOf(this);
		Config.Enemies.splice(index,1);
	}
}

