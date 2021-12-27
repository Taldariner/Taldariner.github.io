$(document).ready(function() {
	var playing = "0";
  	const audio = new Audio("MC.mp3");
  	console.log(playing);
	  $('#cover').click(function() {
	  	if(playing === "0")
  		{
	    	audio.play();
	    	playing = "1";
	    	//console.log("play");
	    }
	    else if(playing === "1")
	    {
	    	audio.pause();
	    	playing = "0";
	    	//console.log("pause");
		}
	});

	audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    //console.log("loop");
}, false)
});

