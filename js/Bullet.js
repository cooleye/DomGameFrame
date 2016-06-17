var Bullet = function(opts){
	Sprite.call(this,opts);
}
Bullet.prototype = new Sprite();
Bullet.prototype.constructor = Bullet;

Bullet.prototype.fly = function(){
	
	var imgNode = this.imgNode;
	
	imgNode.style.transform = 'scaleX('+this.direction+')';

	imgNode.style.left  = imgNode.offsetLeft + this.direction*Config.BulletSpeed + 'px';
	
	if(imgNode.offsetLeft > 1300){
		
		var parentNode = imgNode.parentNode;
		
		parentNode.removeChild(imgNode);
		
		var index = Config.Bullets.indexOf(this);
		
		Config.Bullets.splice(index,1);
		
	}
	
}
