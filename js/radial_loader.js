$(document).ready(function(){
	
	var changePercentage = function() {
		this.percentage = 0;
	};

	window.onload = function() {
  			
  		var progress = new changePercentage();

  		var gui = new dat.GUI();
  			gui.add(progress, 'percentage', 0, 180);

  		var updateProgress = function() {
	  		var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
	  		var rotation = Math.floor(progress.percentage);
			var fill_rotation = rotation;
			var fix_rotation = rotation * 2;

			for(i in transform_styles) {
				$('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
				$('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
			}
  		};
  		setInterval( updateProgress, 500 );

	};
});