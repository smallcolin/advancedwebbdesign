!function($){

/*---------------------------------------*/
/* 	          Sticky Header              */
/*---------------------------------------*/

	// Spara ned window värdet i en variabel

	var _window = $(window);

	// Spara ned header-elementet i en variabel

	var _header = $("header");

	var _hero = $("section.hero");
	var _main = $("#main");

	// Spara ned header-elementets placering från toppen i en variabel

	var _headerTop = _header.offset().top;

	// Skapa en funktion som heter stickyNav

	var stickyNav = function(){
		// Spara ned hur långt ned vi scrollat i en variabel
		var _scroll = _window.scrollTop();

		// Om vi har scrollat förbi header-elementet
		if ( _scroll > _headerTop ) {
		// Lägg på klassen sticky på header-elementet
			_header.addClass("sticky");

		//  Om hero är större än 0, lägg på klassen "space" på header (efter header-elementet)
			if ( _hero.length > 0 ) {
				_hero.addClass("space");
			}
		//  Om here är inte större än 0, lägg på klassen "space" på "main" sektionen istället
			else {
				_main.addClass("space");
			}
		}
		// Om ni inte har scrollat förbi header-elementet
		else {
		// Ta bort klassen sticky från header-elementet
			_header.removeClass("sticky");
		//  Om hero är större än 0, ta bort klassen "space" på header (efter header-elementet)…
			if ( _hero.length > 0 ) {
				_hero.removeClass("space");
			}

		// eller ta bort från "main" sektionen
			else {
				_main.removeClass("space");
			}
		}
	};

	// Kör funktionen stickyNav direkt när dokumentet laddas
	stickyNav();

	// När vi scrollar på sidan
	$(window).scroll(function(){
		// Kör funktionen stickyNav
		stickyNav();
	});



/*---------------------------------------*/
/* 	          Responsiv Meny             */
/*---------------------------------------*/

$(document).ready(function(){
        $("#nav-mobile").html($("#nav-main").html());

    // Klicka för att öppna responsiva meny

        $("#nav-trigger span").click(function(){

        // Om redan öppnat ta bort klass för att ta bort menyn

            if ($("nav#nav-mobile ul").hasClass("expanded")) {
                $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
                $(this).removeClass("open");

        // Om det är stängt lägga till klassen för när menyn öppnas

            } else {
                $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
                $(this).addClass("open");
            }
        });
    });

	// Byta ikonen
   
   	$("#nav-trigger > span > i").click(function(){
   		$(this).toggleClass("fa-angle-double-down fa-angle-double-left");
   		$(this).siblings().slideToggle();
	});

/*---------------------------*/
/* 	 Accordian Style (News)  */
/*---------------------------*/

	// Färger för varje ny post ( article > p ) 

	$(".accordian-box:nth-child(2) > article > p").css("color", "red");
	$(".accordian-box:nth-child(3) > article > p").css("color", "orange");
	$(".accordian-box:nth-child(4) > article > p").css("color", "pink");
	$(".accordian-box:nth-child(5) > article > p").css("color", "darkcyan");
	$(".accordian-box:nth-child(6) > article > p").css("color", "pink");


	//--------------- Slide Toggle för värje datum ---------------//

	// Vid klick på en datum (h3)

	$(".accordian-box > h3").click(function(){

		// Ta bort klassen fröm alla andra h3

			$(this).parent(".accordian-box")
			.siblings(".accordian-box")
			.children("h3").removeClass("darkgreen");

		// Open element 

			$(this).toggleClass("darkgreen");

		// Stäng syskonelementen
		
			$(this).parent(".accordian-box")
			.siblings(".accordian-box")
			.children("article")
			.slideUp();
			
			// Visa text/info för denna datum

			$(this).next("article").slideToggle("fast");
		});


	/*-----------------------------*/
	/* 	   Discography (Tabs)	   */
	/*-----------------------------*/

	// Vid klick på en skivan

	$(".tabs > li").click(function(){

		// Avmarkera andra flikar

		$(this).siblings().removeClass("active");

		// Markera denna flik som öppen

		$(this).addClass("active");

		// Spara ned värdet från flikens data-attribut i en variabel

		var number = $(this).data("number");

		// Stäng alla andra flik-info

		$(".tabsbox > article").hide();

		// Visa den info som har samma nummer som denna flik

		$(".tabsbox > article[data-number=" + number + "]").show();
	});


	/*-----------------------------*/
	/* 	   Bilder (Modal)	 	   */
	/*-----------------------------*/

	// Klicka på bilden (Visa #fade, #modal och button )

	$("img").click(function(){
		
		// Så att rätt bild öppnas…

		var source = $(this).attr("src");

		$("#modal img").attr("src", source);

		$("#fade").show();
		$("#modal").show();
		$("#modal button").show();
	});

	// Klicka på button (Gömma #modal, #fade och button) 

	$("#modal button").click(function(){
		$("#fade").hide();
		$("#modal").hide();
		$(this).hide();
	});


	/*-----------------------------*/
	/* 	   Pre-Header Scroll	   */
	/*-----------------------------*/

	$(".fa-arrow-down").click(function(){
		$("html, body").animate({
			//scrollTop: 0
			scrollTop: $("#header").offset().top
		}, 1200);
	});
	

}(jQuery);