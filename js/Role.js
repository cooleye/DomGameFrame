/**
 * 
 * 定义角色类
 * 
 * */
var Role = function(opts){
	Sprite.call(this,opts);
}
Role.prototype = new Sprite();
Role.prototype.constructor = Role;

Role.prototype.hp = 0;

Role.prototype.move = function(direction){
	
	
	var imgNode = this.imgNode;
	var _dir = this.direction;
	
	switch(direction){
		case 'A':  moveLeft(); break;
		case 'W':  moveUp();break;
		case 'D':  moveRight();break;
		case 'S':  moveDown();break;
	}
	

	
	function moveLeft(){
		_dir = -1;
		imgNode.style.transform = 'scaleX(-1)';
		this.positionX = imgNode.offsetLeft - Config.MoveSpeed;
		imgNode.style.left = this.positionX + 'px';
	}
	function moveRight(){
		_dir = 1;
		imgNode.style.transform = 'scaleX(1)';
		this.positionX = imgNode.offsetLeft + Config.MoveSpeed;
		imgNode.style.left = this.positionX + 'px';
	}
	
	function moveUp(){
		this.positionY = imgNode.offsetTop - Config.MoveSpeed;
		imgNode.style.top = this.positionY + 'px';
	}
	function moveDown(){
		this.positionY = imgNode.offsetTop + Config.MoveSpeed;
		imgNode.style.top = this.positionY + 'px';
	}
	
	
	var parentNode = this.imgNode.parentNode;
	if(imgNode.offsetLeft < 0){
		imgNode.style.left = '0px';
	}
	if(imgNode.offsetLeft > parentNode.offsetWidth - imgNode.offsetWidth){
		imgNode.style.left = parentNode.offsetWidth - imgNode.offsetWidth + 'px'
	}
	
	if(imgNode.offsetTop < 0){
		imgNode.style.top = '0px';
	}
	if(imgNode.offsetTop > parentNode.offsetHeight - imgNode.offsetHeight){
		imgNode.style.top  = parentNode.offsetHeight - imgNode.offsetHeight + 'px'
	}
		
		
	
	this.direction = _dir;

}

