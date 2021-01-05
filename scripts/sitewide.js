$(function() {
    $("#collapse-button").on("click", function(event){
        handleCollapseButtonPress();
        event.stopImmediatePropagation();
    })
    $("body").on("click", function(event){
        handleBodyClick();
        event.stopImmediatePropagation();
    })
});

const handleBodyClick = function(event){
    if ($("#navbarNav").hasClass("show")){
        $("#navbarNav").removeClass("show");
    }
}

const handleCollapseButtonPress = function(event) {
    if ($("#navbarNav").hasClass("show")){
        $("#navbarNav").removeClass("show");
    }
    else{
        $("#navbarNav").addClass("show");
    }
}