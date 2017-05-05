$.fn.floatmenuar = function(cultureOption) {



// CULTURE & LABELS

var culture = cultureOption || 'es-ar';
var currentLocation = window.location.pathname;
console.log(culture);
var pageOptions;
var options;


$.ajax({
  url: '/Scripts/mocks/config-override.json',
  async: false,
  dataType: 'json',
  success: function (response) {
    pageOptions = response;
  }
});

$.ajax({
  url: '/Scripts/mocks/config.json',
  async: false,
  dataType: 'json',
  success: function (response) {
    options = response;
  }
});


var selectedOptions = options[culture];
if (pageOptions[currentLocation]){
	var selectedOverride = pageOptions[currentLocation][culture];
	for (var prop in selectedOverride) {
    for (var prop2 in selectedOverride[prop]) {
        selectedOptions[prop][prop2] = selectedOverride[prop][prop2];
    	}
	}
 }
else {
	currentLocation = currentLocation + window.location.search;
	if (pageOptions[currentLocation]){
	var selectedOverride = pageOptions[currentLocation][culture];
	for (var prop in selectedOverride) {
    for (var prop2 in selectedOverride[prop]) {
        selectedOptions[prop][prop2] = selectedOverride[prop][prop2];
	    }
	}
 }
}
//console.log(currentLocation);
// Agrego el container principal al body

var floatMenuContainer = '<div class="nav-module focus hidden">' +
						 '    <ul class="module-container list-unstyled">' +
						 '    </ul>' +
						 '</div>';

this.append(floatMenuContainer);

//--------------------------------------


var listContainer = $('.module-container');


// Botones

var buttonSearch  = '<li>' +
					'    <div class="search-container">' +
					'        <span class="btn_form_search"><img src="/img/common/ico_plane.png" alt="Reservá tu vuelo" role="presentation"><span class="sr-only">Reservá tus</span> '+ selectedOptions['search']['label'] +'</span>' +
					'        <span class="btn-module btn_form_close btn_form_search_close hidden">'+
					'            <span class="sr-only">Cerrar</span><img src="/img/common/arrow-close.png" alt="Cerrar" role="presentation">'+
					'        </span>'+
					'        <div id="contenedor_form_search" class="form-open">'+
					'        </div>'+
					'    </div>'+
					'</li>';

var buttonCheckin = '        <!-- CHECK IN -->' +
					'        <li>' +
					'            <div class="checkin-container">' +
					'                <a class="btn-module" id="btnCheckIn" href="'+ selectedOptions['check-in']['destination'] +'">' +
					'                    <span class="inner"> ' +
					'                        <span class="icon">' +
					'                            <img src="/img/common/ico_ticket.png" alt="'+ selectedOptions['check-in']['alt-link']  +'" role="presentation"/>' +
					'                        </span> ' +
											 selectedOptions['check-in']['label'] +
					'                    </span>' +
					'                </a>' +
					'            </div>' +
					'        </li>' +
					'        <!-- /CHECK IN -->';

var buttonARPlus =	'        <!-- AR PLUS ASOCIATE -->' +
					'        <li>' +
					'            <div class="arplus-container">' +
					'                <a id="btnArPlus" class="btn-module" href="'+ selectedOptions['ar-plus-asociate']['destination'] + '">' +
					'                    <span class="inner"> ' +
					'                        <span class="icon">' +
					'                            <img src="/img/common/ico_asociate.png" alt="' + selectedOptions['ar-plus-asociate']['alt-link'] +'" role="presentation"/>' +
					'                        </span> ' +
					                         selectedOptions['ar-plus-asociate']['label'] +
					'                    </span>' +
					'                </a>' +
					'            </div>' +
					'        </li>' +
					'        <!-- /AR PLUS ASOCIATE -->';

var buttonARLogin =	'        <!-- AR PLUS LOGIN -->' +
			        '       <li>' +
			        '            <div class="arplus-login-container">' +
			        '                <span class="btn-module btn_form_arplus">' +
			        '                    <span class="icon"><img src="/img/common/ico_arplus.png" alt="Ingresá a tu cuenta AR Plus" role="presentation"></span>Mi cuenta Plus</span>' +
			        '                <span class="btn-module btn_form_close btn_form_arplus_close hidden">' +
			        '                   <span class="sr-only">Cerrar</span><img src="/img/common/arrow-close.png" alt="Cerrar" role="presentation">' +
			        '               </span>' +
			        '                <div class="form-open form-arplus-open">' +
			        '                    <div id="contenedor_form-arplus" class="clearfix">' +
			        '                    </div>' +
			        '                </div>' +
			        '            </div>' +
			        '        </li>' +
			        '        <!-- /AR PLUS LOGIN-->';

var buttonOpinion = '        <!-- OPINION -->' +
					'        <li>' +
					'            <div class="opinion-container">' +
					'                <a class="btn-module" id="btnOpinion" href="'+ selectedOptions['opinion']['destination'] + '">' +
					'                    <span class="inner"> ' +
					'                        <span class="icon">' +
					'                            <img src="/img/common/ico_opinion.png" alt="Danos tu opinión" role="presentation"/></span> ' +
					                           	 selectedOptions['opinion']['label'] +
					'                    </span>' +
					'                </a>' +
					'            </div>' +
					'        </li>' +
					'        <!-- /OPINION -->';

var buttonFlightStatus = '        <!-- FLIGHT STATUS -->' +
					'        <li>' +
					'            <div class="flight-status-container">' +
					'                <a class="btn-module" id="btnFlightStatus" href="'+ selectedOptions['status']['destination'] + '">' +
					'                    <span class="inner"> ' +
					'                        <span class="icon">' +
					'                            <img src="/img/common/ico_status.png" alt="" role="presentation"/></span> ' +
					                           	 selectedOptions['status']['label'] +
					'                    </span>' +
					'                </a>' +
					'            </div>' +
					'        </li>' +
					'        <!-- /FLIGHT STATUS -->';

var buttonNews =    '        <!-- NEWSLETTER -->' +
					'        <li>' +
					'            <div class="newsletter-container">' +
					'                <a class="btn-module" id="btnNews" href="'+ selectedOptions['newsletter']['destination'] + '">' +
					'                    <span class="inner"> ' +
					'                        <span class="icon">' +
					'                            <img src="/img/common/ico-rss.png" alt="Newsletter" role="presentation">' +
					'                        </span> ' +
					                        selectedOptions['newsletter']['label'] +
					'                </span>' +
					'                </a>' +
					'            </div>' +
					'        </li>' +
					'        <!-- /NEWSLETTER -->';
					
var buttonChat =    '        <!-- CHAT -->' +
					'        <li>' +
					'            	<div class="chat-container">' +
					'         	 <a id="btnChat" href="'+ selectedOptions['chat']['destination'] + '">' +
					'                    <span class="btn-module btn-chat btn_form_chat">' +
					'                        <img class="chat-img" src="/img/common/img-chat_b.png" alt="' + selectedOptions['chat']['alt-link'] +'" role="presentation">' +
					'                        <span class="text-img">' + selectedOptions['chat']['label'] +'</span>' +
					'                    </span>' +
					'            </a>' +
					'            	</div>' +

					'        </li>' +
					'        <!-- /CHAT -->';
					
    
 /// Fin Botones


// Defino que botones agrego en base a la configuracion.

if (selectedOptions['search']['visible']){listContainer.append(buttonSearch)};

$('#contenedor_form_search').load(selectedOptions['search']['destination']);

if (selectedOptions['check-in']['visible']){listContainer.append(buttonCheckin)};
if (selectedOptions['ar-plus-asociate']['visible']){listContainer.append(buttonARPlus)};
if (selectedOptions['ar-plus-login']['visible']){listContainer.append(buttonARLogin)};

$('#contenedor_form-arplus').load(selectedOptions['ar-plus-login']['destination']);

if (selectedOptions['opinion']['visible']){listContainer.append(buttonOpinion)};
if (selectedOptions['newsletter']['visible']){listContainer.append(buttonNews)};
if (selectedOptions['chat']['visible']){listContainer.append(buttonChat)};

       	  $(".btn_form_chat").click(function() {  
              $(".chat-inner").addClass("open");
              $(".btn_form_chat").addClass("hidden");
              $(".btn_form_chat_close").removeClass("hidden");
          });
         
          
          $(".btn_form_chat_close").click(function(){
              $(".chat-inner").removeClass("open");
              $(".btn_form_chat").removeClass("hidden");
              $(".btn_form_chat_close").addClass("hidden");
          });

		$(document).mouseup(function (e){
          	var container = $(".chat-inner");
          	var btn_close = $(".btn_form_chat_close");
          	var btn       = $(".btn_form_chat");
         	 if (!container.is(e.target) 
           	   && container.has(e.target).length === 0) {
            	  container.removeClass("open");
            	  btn_close.addClass("hidden");
            	  btn.removeClass("hidden");
         	 }        

      	});

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

		$(document).mouseup(function(a){var b=$(".form-arplus-open"),c=$(".btn_form_arplus_close"),d=$(".btn_form_arplus");b.is(a.target)||0!==b.has(a.target).length||(b.removeClass("open"),c.addClass("hidden"),d.removeClass("hidden"))});

		

};

$(document).ready(function() {
		if (typeof(pageCulture) == "undefined"){
				var pageCulture;
				
			}
		
		$('#main-content').floatmenuar(pageCulture);
	 	
	 	$('.nav-module').addClass('visible-md-block').addClass('visible-lg-block');


		  //datepicker form search desktop
		  $('#inputDepartureDate2').datepicker({
		    theme: 'blue',
		    outputFormat: 'dd/MM/yyyy'
		  });
		  $('#inputReturnDate2').datepicker({
		    theme: 'blue',
		    outputFormat: 'dd/MM/yyyy'
		  });

		  //datepicker form search mobile
		  $('#inputDepartureDate_02m').datepicker({
		    theme: 'blue',
		    outputFormat: 'dd/MM/yyyy'
		  });
		  $('#inputReturnDate_02m').datepicker({
		    theme: 'blue',
		    outputFormat: 'dd/MM/yyyy'
		  });
		  $(".btn_form_search").click(function() {  
		      $("#contenedor_form_search").addClass("open");
		      $(".btn_form_search").addClass("hidden");
		      $(".btn_form_search_close").removeClass("hidden");
		  });
		  $(".btn_form_search_close").click(function(){
		      $("#contenedor_form_search").removeClass("open");
		      $(".btn_form_search").removeClass("hidden");
		      $(".btn_form_search_close").addClass("hidden");
		  });
		});
		$(document).mouseup(function (e){
		          var container = $("#contenedor_form_search");
		          var btn_close = $(".btn_form_search_close");
		          var btn       = $(".btn_form_search");
		          if (!container.is(e.target) 
		              && container.has(e.target).length === 0) {
		              container.removeClass("open");
		              btn_close.addClass("hidden");
		              btn.removeClass("hidden");
		}        
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
	$(document).mouseup(function(a){var b=$(".form-arplus-open"),c=$(".btn_form_arplus_close"),d=$(".btn_form_arplus");b.is(a.target)||0!==b.has(a.target).length||(b.removeClass("open"),c.addClass("hidden"),d.removeClass("hidden"))});
 		
    });