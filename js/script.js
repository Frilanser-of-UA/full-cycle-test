var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
	hoverOnly: true
});

$(function () {
	var rotation = 0,
		scrollLoc = $(document).scrollTop();
	$(window).scroll(function () {
		var newLoc = $(document).scrollTop();
		var diff = scrollLoc - newLoc;
		rotation += diff, scrollLoc = newLoc;
		var rotationStr = "rotate(" + rotation + "deg)";
		$(".paralax__img").css({
			"-webkit-transform": rotationStr,
			"-moz-transform": rotationStr,
			"transform": rotationStr
		});
	});
})

$(function () {
	$('.fullscreen__text_botton').marquee({
		duration: 10000,
		startVisible: true,
		duplicated: true,
		gap: 50,
	});
});

$(function () {
	$('.fullscreen__text_top').marquee({
		duration: 10000,
		startVisible: true,
		duplicated: true,
		gap: 50,
	});
});


// ================= Menu ===============

function menu_burger() {
	let iconMenu = document.querySelector(".icon-header");
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle("_active");
	});
};
menu_burger();