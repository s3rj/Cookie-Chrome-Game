var Boot = function(game){

};
  
Boot.prototype = {

	preload: function(){

	},
	
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
		this.game.state.start("Preload");
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.scale.windowConstraints.right = "layout";
		this.game.scale.windowConstraints.bottom = "visual";
		if (this.game.device.pixelRatio > 1){
			userRatio = this.game.device.pixelRatio * .333;
			this.game.scale.setUserScale(1/userRatio, 1/userRatio);
			this.game.scale.setGameSize(window.innerWidth*userRatio,window.innerHeight*userRatio);
		}
	}
}