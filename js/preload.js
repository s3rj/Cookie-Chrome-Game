var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		this.game.load.image('tile', 'assets/tile.png');
		this.game.load.image('box', 'assets/faceBox.png');
		
		// this.game.load.spritesheet('player', 'assets/player.png', 24, 24, 9, -2);
		this.game.load.image('player','assets/chad.png' );
		

	},

	create: function(){
		this.game.state.start("Main");
	}
}