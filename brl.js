
$(window).ready(function(){
	setTimeout("nextPicture()",5000);
});

var imageIndex = 0;

function nextPicture(){
	$("#imagePanel li").each(function(){
		$this = $(this);
		$this.animate({
			left: '-=' + $this.width()
		}, 'fast', function(){
			$this = $(this);
			if ($this.offset().left < 0) {
				$this.offset({left: ($this.offset().left + (4 * $this.width()))});
			};
		});
	});
	imageIndex += 1;
	$("#imageIndex li div.bullet.inView").removeClass("inView");
	$("#imageIndex li div.bullet:eq(" + (imageIndex) + ")").addClass("inView");
	if (imageIndex >= 3) {
		imageIndex = -1;
	};
	setTimeout("nextPicture()",5000);
};

$(document).ready(function () {
    $(":input[data-watermark]").each(function () {
        $(this).val($(this).attr("data-watermark"));
        $(this).bind('focus', function () {
            if ($(this).val() == $(this).attr("data-watermark")) $(this).val('');
        });
        $(this).bind('blur', function () {
            if ($(this).val() == '') $(this).val($(this).attr("data-watermark"));
            $(this).css('color','#a8a8a8');
        });
    });

    $("#send").click(function(){
    	var link = "mailto:eduardo.oviedo@gmail.com"//"mailto:info@brlresearch.com"
             + "?subject=" + escape("Site contact request from " + $("#name").val())
             + "&body=" + escape($("#name").val() +" \n"+ $("#email").val() +" \n"+ $("#phone").val() +" \n \n"+ $("#message").val());

    	window.location.href = link;
    });
    $("#clear").click(function(){
    	$("#name").val($("#name").attr("data-watermark"));
    	$("#email").val($("#email").attr("data-watermark"));
    	$("#phone").val($("#phone").attr("data-watermark"));
		$("#message").val($("#message").attr("data-watermark"));
    });
    $("div.button.c0, div.logo").click(function(){
		window.location.href = "index.html";
    });
    $("div.button.c1").click(function(){
		window.location.href = "who_we_are.html";
    });
    $("div.button.c2").click(function(){
		window.location.href = "values.html";
    });
    $("div.button.c3").click(function(){
		window.location.href = "solutions.html";
    });
    $("div.button.c4").click(function(){
		window.location.href = "contact_us.html";
    });
});