var data = { projects: [
    {
    	title: "Porting Animation Feature Windows -> iOS",
    	link: "" ,
    	description: "In Summer 2016, I interned at Microsoft for the Apple Experiences team. I worked on a team of three interns to port an animation feature from Windows to iOS. I ported, debugged, and minimally refactored ~80 files of code. I also worked as a Program Manager for the first month of my internship where I wrote a product spec, created designs, and led weekly meetings. ",
    	tools: "C++, Xcode, UI/UX, Large-scale legacy code bsae",
    	images: [
    		"img/women-in-engineering/women-engineer1.png",
    		"img/women-in-engineering/women-engineer2.png",
    		"img/women-in-engineering/women-engineer3.png",
    		"img/women-in-engineering/women-engineer4.png"
    	]
    },
    {
    	title: "Hack Against Gun Violence",
    	link: "" ,
    	description: "In Summer 2016, I participated in a hackathon to create a web app that would filter out illegal gun listings on Craigslist and OfferUp, feed the posts into MSFT Computer Vision API to judge accuracy, and finally render the results onto our local machine. The long-term goal/audience is for local police officers to be able to monitor illegal gun sales rather than manually keeping track. My role specifically was to write a web-crawler program in Python to filter and organize the potential listings on Craigslist. ",
    	tools: "Python, Web-crawling, Hackathon project",
    	images: [
    		"img/boulderblast/boulderblast-1.png",
    		"img/boulderblast/boulderblast-2.png",
    		"img/boulderblast/boulderblast-3.png"
    	]
    },
	    {
    	title: "What Type Of Cat Do You Look Like?",
    	link: "" ,
    	description: "This is a simple fun program that takes pictures of a person as input and outputs what type of cat they most resemble.  ",
    	tools: "Python, MSFT Computer Vision API",
    	images: [
    		"img/boulderblast/boulderblast-1.png",
    		"img/boulderblast/boulderblast-2.png",
    		"img/boulderblast/boulderblast-3.png"
    	]
    },
	{
    	title: "Minesweeper",
    	link: "" ,
    	description: "This is an existing github repo that a classmate and I expanded on. We added new features to the game such as revealing mines when the game is over, saving past scores into a leader board, and adding timers, new menus, pop-up messages etc.",
    	tools: "Java, GUI Programming, legacy code, Github",
    	images: [
    		"img/boulderblast/boulderblast-1.png",
    		"img/boulderblast/boulderblast-2.png",
    		"img/boulderblast/boulderblast-3.png"
    	]
    }

  ]};

$(document).ready(function() {
    var source   = $("#project-template").html();
    var template = Handlebars.compile(source);
    $(".project-content").html(template(data));

	// set rows for project blocks
	var blocksPerRow;
	if ($(window).width() >= 1025)
		blocksPerRow ="2";
	else
		blocksPerRow = "1";

	$('.project-description:nth-child(' + blocksPerRow + 'n)').each(function(index) {
	    $(this).prevAll('.project-description').andSelf().wrapAll('<div class="row"></div>');
	});

	if (data.projects.length % 2 != 0) {
		$('.project-description:last-child').wrap('<div class="row" />');
	}
	
    checkWidth();
    $(window).resize(checkWidth);



	// Scroll Speed
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, function () {
	        window.location.hash = target;
	    });
	});
});

// make nav + content divs responsive
function checkWidth() {
    if ($(window).width() <= 575) {
        $('nav').css("position", "relative");
        $('nav').addClass("small-12 columns");
        $('.content').css("margin-left", 0);
    }
    else {
        var navWidth = $('nav').outerWidth();
        $('nav').removeClass("small-12 columns");
        $('nav').css("position", "fixed");
        $('.content').css("margin-left", navWidth + 20);
    }       
}