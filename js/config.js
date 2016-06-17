var Config = Config ||{}

Config.MoveSpeed = 30;

Config.BulletSpeed = 30;

Config.EnemyMoveSpeed = 3;

Config.Bullets = [];

Config.Enemies = [];

Config.SCORE = 0;

Config.GameState = {
	 STOPED:0,
	 RUNNING:1,
	 PAUSED:2
}

Config.CurrentGameState = Config.GameState.STOPED;

