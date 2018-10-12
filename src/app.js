function toggleChat(e){
	const chat = document.getElementById('chat');
	chat.classList.toggle('chat--opened');
}

document.addEventListener("DOMContentLoaded", function(){
	const chat = document.getElementById('chat');
	const toggler = document.getElementsByClassName('js-toggle-chat');

	for (var i = toggler.length - 1; i >= 0; i--) {
		toggler[i].addEventListener('click', toggleChat);
	}
});
