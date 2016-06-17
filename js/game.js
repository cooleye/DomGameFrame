window.onload = function(){

	var games_cene = $('games_cene');
	var FireStarter = null; // 发射子弹的定时器
	var updateTimer = null;//刷新定时器
	var enemyTimer = null;//添加敌人的定时器
	
	var role_hp = $('role_hp');
	
	var socre_label = $('score_lable');
	
	var game_over_page = $('game_over_page');
	
	var restartbtn = $('restartbtn');
	
	var start_page = $('start_page');
	
	var startbtn = $('startbtn');
	
	var hero = null;
	
	
	startbtn.onclick = function(){
		start_page.style.display ='none'
		startGame();
	}
	
	function startGame(){
	
		Config.SCORE = 0;
		Config.CurrentGameState = Config.GameState.RUNNING;
		socre_label.innerHTML = 0;
		games_cene.innerHTML = '';
		role_hp.style.width = '420px';
		addHero();
		
		enemyTimer = setInterval(addEnemy,1000);
		updateTimer = setInterval(updateFunc,40);
	}
	/**
	 * 
	 * 创建主角对象
	 * */
	
	
	function addHero(){
		
		hero = new Role({
		'imgSrc':TEX.hero,
		'width':80,
		'height':160,
		'type':'hero',
		x:200,
		y:200
	});
	hero.hp = 100;
	hero.score = Config.SCORE;
	
	hero.appendTo(games_cene);
	}
	
	
	/**
	 * 监听键盘事件
	 * */
	document.addEventListener('keydown',function(event){
	
		if(Config.CurrentGameState === Config.GameState.RUNNING){
			var keycode = event.keyCode;
			var cha = String.fromCharCode(keycode).toUpperCase();
			
			if(hero != undefined){
				hero.move(cha);
			}
			
			if(keycode === 32){
				addBullet();
			}
		}
							
	},false)
	
	document.addEventListener('mousedown',function(){
		if(Config.CurrentGameState === Config.GameState.RUNNING){
			addBullet();
		}
	},false)
	
	
	
	function addBullet(){
		
		var dir = hero.direction;
		
		var heropPos = hero.getPosition();
		var heroSize = hero.getSize();
		var x = dir == -1 ? heropPos.x : heropPos.x + heroSize.width;
		var y = heropPos.y + heroSize.height/2;
		

		var bullet = new Bullet({
		'imgSrc':TEX.bullet2,
		'width':10,
		'height':3,
		'type':'bullet',
		'x':x,
		'y':y,
		'direction':hero.direction
		});
			
		bullet.appendTo(games_cene);
		
		Config.Bullets.push(bullet);
	}
	
	
	
	
	/**
	 * 添加敌人
	 * */
	
	function addEnemy(){
	
		if(Config.CurrentGameState == Config.GameState.RUNNING){
			var x = 1300;
			var y = Math.random()*300 + 150;
			var zombie = new Enemy({
				'imgSrc':TEX.zombie,
				'width':80,
				'height':160,
				'type':'hero',
				'x':x,
				'y':y
			});
			
			zombie.appendTo(games_cene);
			
			Config.Enemies.push(zombie);
		}
	}
	
	
	
	function updateFunc(){
		
		
		if(Config.CurrentGameState == Config.GameState.RUNNING){
			for(var i = 0;i < Config.Bullets.length;i++){
			
			var bullet = Config.Bullets[i];
			
			bullet.fly();
			
			var bbox = bullet.getBoundingBox();
			for(var j = 0;j < Config.Enemies.length;j++){
				
				var enemy = Config.Enemies[j];
				var ebox = enemy.getBoundingBox();
				if(collision(bbox,ebox)){
					
					Config.Enemies.splice(j,1);
					Config.Bullets.splice(i,1);
					
					enemy.removeFromParent();
					bullet.removeFromParent();
					
					Config.SCORE++;
					socre_label.innerHTML = Config.SCORE;
					hero.score = Config.SCORE;
				}
			}
		}
		
		
		for(var i = 0;i < Config.Enemies.length;i++){
			var enemy = Config.Enemies[i];
			enemy.move(hero);
			
			var ebox = enemy.getBoundingBox();
			var hbox = hero.getBoundingBox();
			if(collision(ebox,hbox)){
				
				enemy.removeFromParent();
				Config.Enemies.splice(i,1);
				
				hero.hp -= 10;
				role_hp.style.width = role_hp.offsetWidth - 420/10 + 'px';
				
				if(hero.hp <=0){
					gameOver();
				}
				
			}
		}
		}
		
	}
	
	
	
	var over_score = $('over_score');
	function gameOver(){
		
		
		clearInterval(addEnemy);
		clearInterval(updateTimer)
		
		over_score.innerHTML = Config.SCORE;
		
		game_over_page.style.display = 'block';
		
		Config.CurrentGameState = Config.GameState.STOPED;
		
	}
	
	
	restartbtn.onclick = function(){
		
		game_over_page.style.display = 'none';
		
		startGame();
	}

}





