$(document).ready(function(){




	$(".btn_form_arplus").click(function(){
			$(".form-arplus-open").addClass("open");
			$(".btn_form_arplus").addClass("hidden");
			$(".btn_form_arplus_close").removeClass("hidden");
		});

	$(".btn_form_arplus_close").click(function(){
			$(".form-arplus-open").removeClass("open");
			$(".btn_form_arplus").removeClass("hidden");
			$(".btn_form_arplus_close").addClass("hidden");
		});

}),

$(document).mouseup(function(a){var b=$(".form-arplus-open"),c=$(".btn_form_arplus_close"),d=$(".btn_form_arplus");b.is(a.target)||0!==b.has(a.target).length||(b.removeClass("open"),c.addClass("hidden"),d.removeClass("hidden"))});