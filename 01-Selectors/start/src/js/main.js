(function ($) {

	// JS code goes here
	var tl = new TimelineLite();
	var div = $("div"),
		h1 = $("h1"),
		layer8 = $("#Layer_8"),
		petals = $(".cls-3"),
		svg = $("svg");
var i = 1;
	svg.width(129);
	TweenLite.from(div, 6, {
		y: -100,
		backgroundColor: "red",
		ease: Elastic.easeOut,
		onStart: onStart,
		onUpdate: onUpdate,
		onComplete: onComplete

	});
	// TweenLite.to(h1, 2, { autoAlpha: 1, color: "green", ease: Bounce.easeOut, delay: 2 });
	// TweenLite.to(layer8, 2, { fwidth: 60, ease: Elastic.easeOut });

	


	function onStart() {
		console.log("animation started")
	}
	function onUpdate() {
		console.log("animation running")
		h1.text(i++);
	}
	function onComplete() {
		console.log("animation completed")
		h1.text("Fin!");
		tl.to(petals, 1, {fill: "red", stroke: 2, strokeColor: "black" }, "-=2");
	}

})(jQuery);