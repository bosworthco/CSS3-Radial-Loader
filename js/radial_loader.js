$(document).ready(function(){
	
	var changePercentage = function() {
		this.percentage = 0;
	};

	window.onload = function() {
  			
  		var progress = new changePercentage();

  		var gui = new dat.GUI();
  			gui.add(progress, 'percentage', 0, 100);

  		var updateProgress = function() {
	  		var rotation = Math.floor(progress.percentage);
			$('.loader__progress').attr('data-progress', rotation);
  		};
  		setInterval( updateProgress, 500 );

	};
});