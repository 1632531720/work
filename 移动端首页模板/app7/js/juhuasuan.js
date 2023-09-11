"use strict"

var rem = 20;
;(function(){
	function changeRem(){
		rem = 20/320 * document.documentElement.clientWidth;
		document.documentElement.style.fontSize = rem + 'px';
	}
	changeRem();
	window.addEventListener('resize',function(){
		changeRem();
	},false);
})();
