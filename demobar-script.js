$('.toggle-right-sidebar span').on('click', function() {

    if ($("#right-sidebar").hasClass("hide-right-bar-notifications")) {

        $(".btn-bottom-right-sidebar-close").fadeIn("fast");
        if (!$("#sidebar").hasClass('hide-left-bar')) {

            $("#sidebar").addClass("hide-left-bar");
            $("#main-content").addClass("merge-left");

            if ($("html").outerWidth() <= 750) {
                if ($('#sidebar').hasClass('show-left-bar-mobile')) {
                    $('#sidebar').removeClass("show-left-bar-mobile");
                }
            }

        } else {
            if ($("html").outerWidth() <= 750) {
                if ($('#sidebar').hasClass('show-left-bar-mobile')) {
                    $('#sidebar').removeClass("show-left-bar-mobile");
                }
            }
        }

        $("#right-sidebar").removeClass("hide-right-bar-notifications");

        $("#right-sidebar").addClass(" animated fadeInRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass(" animated fadeInRight");
        });

        $(this).removeClass("fa-angle-double-left");
        $(this).addClass("fa-angle-double-right");

    } else {

        $(".btn-bottom-right-sidebar-close").fadeOut("fast");
        if ($("#sidebar").hasClass('hide-left-bar')) {
            $("#sidebar").removeClass("hide-left-bar");
            $("#main-content").removeClass("merge-left");
        }

        $("#right-sidebar").addClass("hide-right-bar-notifications");

        $("#right-sidebar").addClass(" animated fadeOutRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass(" animated fadeOutRight");
        });


        $(this).removeClass("fa-angle-double-right");
        $(this).addClass("fa-angle-double-left");
    }

});