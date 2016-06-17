/**
 * 
 * 定义精灵类
 * 
 * */
var Sprite = function(options){
	
	var _default = {
		imgSrc:'',
		width:100,
		height:100,
		type:'',
		x:0,
		y:0,
		direction:1,
		type:''
	}
	
	for(var prop in options){
		_default[prop] = options[prop];
	}
	
	this.positionX = _default.x;
	this.positionY = _default.y;
	this.width = _default.width;
	this.height = _default.height;
	
	this.imgNode = document.createElement('img');
	this.imgNode.src = _default.imgSrc;
	this.imgNode.style.position = 'absolute';
	this.imgNode.style.width = this.width;
	this.imgNode.style.height = this.height;
	this.imgNode.style.left = this.positionX + 'px';
	this.imgNode.style.top = this.positionY + 'px';
	
	this.type = _default.type;
	
	this.direction = _default.direction;
}

Sprite.prototype.appendTo = function(parent){
	parent.appendChild(this.imgNode);
}
Sprite.prototype.removeFrom = function(parent){
	parent.removeChild(this.imgNode);
}

Sprite.prototype.removeFromParent = function(){
	var parent = this.imgNode.parentNode;
	parent.removeChild(this.imgNode);
}

Sprite.prototype.getPosition = function(){
	return {x:this.imgNode.offsetLeft,y:this.imgNode.offsetTop}
}

Sprite.prototype.getSize = function(){
	return {width:this.imgNode.offsetWidth,height:this.imgNode.offsetHeight}
}
Sprite.prototype.getBoundingBox = function(){
	
	var node = this.imgNode;
	return {width:node.offsetWidth,height:node.offsetHeight,x:node.offsetLeft,y:node.offsetTop}
}
