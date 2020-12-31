let curr = 1;

$(function() {
    console.log('hello');
    $("#left-arrow-holder").on("click", function(event){
        handleLeftArrowPress(event);
        event.stopImmediatePropagation();
    })
    $("#right-arrow-holder").on("click", function(event){
        handleRightArrowPress(event);
        event.stopImmediatePropagation();
    })
});

const handleLeftArrowPress = function(event) {
    if (curr == 1){
        curr = 3;
    }
    else{
        curr--;
    }
    updatePhoto(event);
    console.log(curr);
}

const handleRightArrowPress = function(event) {
    if (curr == 3){
        curr = 1;
    }
    else{
        curr++;
    }
    updatePhoto(event);
    console.log(curr);
}

const updatePhoto = function(event){
    let srcString = "../images/about_photo_" + curr + ".jpg";
    $("#photo-div").empty();
    $("#photo-div").append(`<div class="image-holder"><img src=${srcString} alt="about photo" type="button" id="about-image"></div>`);
}