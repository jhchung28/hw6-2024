var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.load();
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9
	console.log(video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1
	console.log(video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10
	if(video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log(video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function(){
	video.muted = video.muted ? false : true;
	if(video.muted) {
		document.querySelector("#mute").innerHTML = "Unmute"
	} else {
		document.querySelector("#mute").innerHTML = "Mute"
	}
})

document.querySelector("#slider").addEventListener("change", function(){
	video.volume = document.querySelector("#slider").value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
})

document.querySelector("#vintage").addEventListener("click", function(){
	document.querySelector("#player1").classList.add("oldSchool")

})

document.querySelector("#orig").addEventListener("click", function(){
	document.querySelector("#player1").classList.remove("oldSchool")

})