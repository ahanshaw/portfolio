$( document ).ready(function() {

    // fade in home nav 
    $('#home ul').fadeIn(2000,'easeInSine');

    // smooth scroll on nav bar item click
    $('nav a, #home a').click(function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        }, 1000);
        return false;
    });

    // nav update on page scroll
    $(window).scroll(function(){
        var windowPos = $(this).scrollTop();
        var workPos = $('#work').offset().top - 50;
        var aboutPos = $('#about').offset().top - 50;
        var navLink = $('nav');
        var workLink = $('a[href="#work"]');
        var aboutLink = $('a[href="#about"]');

        // hide nav in home section
        if (windowPos < workPos) {
            navLink.hide();
            workLink.removeClass('active');
        }
        else {
            navLink.fadeIn(500);            
        }

        // toggle active link in work/about sections
        if (windowPos >= workPos && windowPos < aboutPos) {
            workLink.addClass('active');
            aboutLink.removeClass('active');
        }
        if (windowPos >= aboutPos) {
            aboutLink.addClass('active');
            workLink.removeClass('active');
        }
    });

    // work slider -- disabled for mobile devices
    if ($(window).width() > 667) {
        // work item variables
        var learnerator = $('#learnerator'),
            inscites = $('#inscites'),
            jdominiak = $('#jdominiak'),
            workButton = $('.workOpenButton'),
            overlay = $('.overlay'),
            close = $('.close');

        // scroll work to top on item click
        $(overlay).click(function() {
            $('html,body').animate({
                scrollTop: $('#work').offset().top
            }, 1000);
        });

        // open learnerator item/close siblings
        $('#learnerator .overlay').click(function() {
            $(this).css('cursor','default').addClass('overlayHover').parent().animate({
                width:'80%'},1000).find(workButton).fadeIn(1000).next().fadeIn(1000);
            inscites.animate({
                left: '80%',
                width: '10%'
                },1000).find(workButton).hide().next().fadeOut(1000).next().removeClass('overlayHover').fadeIn(1000).next().fadeOut(1000);
            jdominiak.animate({
                left: '90%',
                width: '10%'
                },1000).find(workButton).hide().next().fadeOut(1000).next().removeClass('overlayHover').fadeIn(1000).next().fadeOut(1000);
        });

        // open inscites item/close siblings
        $('#inscites .overlay').click(function() {
            $(this).css('cursor','default').addClass('overlayHover').parent().animate({
                left:'10%',
                width:'80%'
                },1000).find(workButton).fadeIn(1000).next().fadeIn(1000);
            learnerator.animate({
                width:'10%'
                },1000).find(workButton).hide().next().fadeOut(1000).next().removeClass('overlayHover').fadeIn(1000).next().fadeOut(1000);
            jdominiak.animate({
                left: '90%',
                width: '10%'
                },1000).find(workButton).hide().next().fadeOut(1000).next().removeClass('overlayHover').fadeIn(1000).next().fadeOut(1000);
        });

        // open jdominiak item/close siblings
        $('#jdominiak .overlay').click(function() {
            $(this).css('cursor','default').addClass('overlayHover').parent().animate({
                left:'20%',
                width:'80%'
                },1000).find(workButton).fadeIn(1000).next().fadeIn(1000);
            learnerator.animate({
                width:'10%'
                },1000).find(workButton).hide().next().fadeOut(1000).next().removeClass('overlayHover').fadeIn(1000).next().fadeOut(1000);
            inscites.animate({
                left: '10%',
                width: '10%'
                },1000).find(workButton).hide().next().fadeOut(1000).next().removeClass('overlayHover').fadeIn(1000).next().fadeOut(1000);
        });

        // hide overlay/show item text on button click
        workButton.click(function() {
            $(this).hide().next().css('color','#333').next().fadeOut(1000).next().fadeIn(1000);
        });

        // restore initial work state from item text view
        close.click(function() {
            initialWorkState();
        });
    }

    function initialWorkState() {
        workButton.fadeOut(1000);
        $(overlay).css('cursor','pointer').removeClass('overlayHover').fadeIn(1000);
        close.fadeOut(1000).css('color','#fff');
        $('.description').fadeOut(1000);
        learnerator.animate({
            width:'33.33%'
            },1000);
        inscites.animate({
            left: '33.33%',
            width: '33.33%'
            },1000);
        jdominiak.animate({
            left: '66.66%',
            width: '33.33%'
            },1000);
    }


    // hover dog image -- disabled on narrow screens
    if ($(window).width() > 768) {
        $('.dogHover').hover(function() {
            $('.dogImage').fadeToggle(500);
            $('.dogText').toggle();
        });
    }

});