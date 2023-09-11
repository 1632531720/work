"use strict";
$(document).ready(function () {
	$(".navi-menu-button").on("click", function (a) {
		navMenuOpen()
	});
	$(".nav-menu").on("click", function (a) {
		if ($(a.target).hasClass("nav-menu")) {
			navMenuClose()
		}
	});
	$("nav.menu ul.main-menu>li>a").on("click", function (a) {
		var b = $(this);
		if (b.parent().find("ul:first").length) {
			a.preventDefault();
			if (!b.parent().hasClass("active")) {
				$("nav.menu ul.main-menu ul").slideUp("fast", function () {
					$("nav.menu ul.main-menu > li").removeClass("active")
				});
				$("nav.menu ul li a span").removeClass("fa-angle-up").addClass("fa-angle-down");
				b.parent().find("ul:first").slideDown("fast", function () {
					b.parent().addClass("active")
				});
				b.find("span").removeClass("fa-angle-down").addClass("fa-angle-up")
			} else {
				b.parent().find("ul:first").slideUp("fast", function () {
					$(this).parent().removeClass("active")
				});
				b.find("span").removeClass("fa-angle-up").addClass("fa-angle-down")
			}
		} else {
			$("nav.menu ul.main-menu ul").slideUp("fast");
			$("nav.menu ul.main-menu > li").removeClass("active");
			b.parent().addClass("active")
		}
	});
	$(".tab-item .fix-width .menu-item").css({
		width: 100 / $(".tab-item .fix-width .menu-item").length + "%"
	});
	if ($(".wizard").length) {
		wizardFixHeight();
		$(window).resize()
	}
	if ($(".animated-text").length) {
		animateText()
	}
});
$(".wrapper-inline").on("scroll", function (a) {
	if (this.scrollTop > 150) {
		$("header.no-background").addClass("set-bg")
	} else {
		$("header.no-background").removeClass("set-bg")
	}
});
var navMenuOpen = function () {
	$(".navi-menu-button").addClass("focused");
	$("div.nav-menu").fadeIn(50, function (a) {
		$("nav.menu").addClass("opened")
	})
};
var navMenuClose = function () {
	$(".navi-menu-button").removeClass("focused");
	$("nav.menu").removeClass("opened");
	$("div.nav-menu").fadeOut(200)
};
var wizardFixHeight = function () {
	$(window).on("resize", function (a) {
		$(".wizard .wizard-item").height($(window).height() - 50)
	})
};
var animateText = function () {
	$(".vertical-center").css({
		"margin-top": $(window).height() / 2 - $(".vertical-center").height() / 2
	});
	$(".animated-text").removeClass("zero-opacity");
	$("[data-transation]").each(function (a, b) {
		var d = $(this);
		d.addClass("hide");
		var f = d.attr("data-transation");
		if (f == "") {
			f = "fadeInDown"
		}
		var c = parseInt(d.attr("data-start-time"));
		if (isNaN(c)) {
			c = 0
		}
		setTimeout(function () {
			d.addClass("animated " + f)
		}, c)
	})
};
$(".sweet-check :checkbox:checked").each(function (a, b) {
	$(this).parent().addClass("checked")
});
$(document).on("click", ".sweet-check", function () {
	if ($(this).hasClass("checked")) {
		$(this).removeClass("checked");
		$(this).find("input").prop("checked", false)
	} else {
		$(this).addClass("checked");
		$(this).find("input").prop("checked", true)
	}
});
$(document).on("click", "[data-loader]", function () {
	$(".sweet-loader").show().addClass("show")
});
$(document).on("click", ".expandable-item .expandable-header", function () {
	if ($(this).parent().hasClass("accordion")) {
		if ($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
			$(this).parent().find(".expandable-content").attr("style", "")
		} else {
			var a = $(this).parent().attr("data-group");
			$('[data-group="' + a + '"]').removeClass("active");
			$('[data-group="' + a + '"]').find(".expandable-content").attr("style", "");
			$(this).parent().find(".expandable-content").css({
				"max-height": $(this).parent().find(".expandable-content")[0].scrollHeight
			});
			$(this).parent().addClass("active")
		}
	} else {
		if ($(this).parent().hasClass("active")) {
			$(this).parent().find(".expandable-content").attr("style", "")
		} else {
			$(this).parent().find(".expandable-content").css({
				"max-height": $(this).parent().find(".expandable-content")[0].scrollHeight
			})
		}
		$(this).parent().toggleClass("active")
	}
});
$(document).on("click", ".tab-item .menu-item", function (a) {
	a.preventDefault();
	var b = $(this).attr("data-content");
	$(this).parents(".tab-item").find(".menu-item").removeClass("active");
	$(this).addClass("active");
	$(this).parents(".tab-item").find(".content-item").removeClass("active");
	$("#" + b).addClass("active")
});
$(document).on("click", ".post-item .post-share > i", function (a) {
	a.preventDefault();
	$(this).parent().find(".social-links").fadeToggle("fast")
});
$(document).on("click", '[data-dismiss="true"]', function () {
	$(this).parents(".popup-overlay").fadeOut("fast")
});
$(document).on("click", "[data-popup]", function () {
	var a = $(this).attr("data-popup");
	$("#" + a).fadeIn("fast")
});
$(document).on("click", ".popup-overlay", function (a) {
	if ($(a.target).hasClass("popup-overlay")) {
		$(this).fadeOut("fast")
	}
});
var openSearchPopup = function () {
	$(".search-form").fadeIn("fast");
	$(".search-form input").focus()
};
var closeSearchPopup = function () {
	$(".search-form").fadeOut("fast")
};
$(document).on("click", '[data-search="open"]', function () {
	openSearchPopup()
});
$(document).on("click", '[data-search="close"]', function () {
	closeSearchPopup()
});
