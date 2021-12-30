$(document).ready(function() {
	var playing = "0";
  	const audio = new Audio("MC.mp3");
	  $('#cover').click(function() {
	  	if(playing === "0")
  		{
	    	audio.play();
	    	playing = "1";
	    }
	    else if(playing === "1")
	    {
	    	audio.pause();
	    	playing = "0";
		}
	});

	audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false)
});

