(function() {
	
	var root = document.getElementById('player-api').getElementsByClassName('html5-video-player')[0];
	var button = root.getElementsByClassName('ytp-button-fullscreen-enter')[0];
	
	button.insertAdjacentHTML('afterend', '<div class="ytp-button ytp-button-open-in-popup" role="button"></div>');

	root.getElementsByClassName('ytp-button-open-in-popup')[0].onclick = function() {
		
		document.getElementsByClassName('video-stream')[0].pause();
		
		var url = document.URL;
		var video_id = url.substr(url.indexOf('watch?v=') + 8);
		
		if(video_id.indexOf('list') > -1) {
			var video_id = video_id.substr(0, video_id.indexOf('&list')); 
		}
		
		var time = root.getElementsByClassName('ytp-time-current')[0].innerHTML.split(':');
		var start_time = parseInt(time[0]) * 60 + parseInt(time[1]);
		
		var url_new = 'https://www.youtube.com/embed/' + video_id + '?rel=0&autoplay=1&showinfo=0&theme=dark&modestbranding=1&autohide=1&start=' + start_time;
		
		var pop_left = (screen.width/2)-(854/2);
		var pop_top = (screen.height/2)-(480/2);
		
		window.open(url_new, null, 'height=480, width=854, status=yes, toolbar=no, menubar=no, location=no, left=' + pop_left + ', top=' + pop_top + ', resizable=yes');
	
	}
	
})();