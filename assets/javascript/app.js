const characterNames = [
    "Spock",
    "Captain Picard",
    "Captain Hammer",
    "Q Continuum",
    "John Crichton",
    "Aeryn Sun",
    "Mulder",
    "Scully",
    "Kara Thrace",
    "Baltar",
    "Walter Bishop",
    "Leeloo",
    "Malcolm Reynolds",
    "Yosaffbridge",
    "Madmartigan",
    "Atreyu",
    "Tyrion Lannister",
    "Ellen Ripley",
    "La Femme Nikita",
    "Inigo Montoya",
]

function nameButtons() {

    for (var i = 0; i <= characterNames.length; i++){
        $("#buttonHolder").append(buttons);

        var buttonDiv = $("<div>");
        var buttons = $("<button>").attr("data-type", characterNames[i]).addClass("allButtons").text(characterNames[i]);

        $(buttonDiv).append(buttons);

    }
};

nameButtons();

/*
create on click using document and button class$(document)on(click, "allbuttons"function

var state = $(this).attr('src", "data-state")
if(state === "still")
 GOOGLE: data-state giphy api, data-animate giphy api, data-still giphy api
*/



var character = $(this).attr("button");
console.log("CHARACTER: "+ character);

$(document).on('click', ".allButtons", function(){
//$(".allButtons").on("click", function(e) {
    //e.preventDefault()

    //console.log(e);
    console.log("BUTTON CLICKED")
    var search = $(this).attr("data-type")
    
    
    
       var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=1DR7K9QuCUV2GxyoEqNw6ovh1OmJtds9&limit=10";
       console.log(queryUrl);

       
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){

        console.log(response);

    
        
        var results = response.data;
        console.log(results);

        for (var j = 0; j < results.length; j++) {

            var characterDiv = $("<div>");
            
            var p = $("<p>").text("Rating: " + results[j].rating);

            var characterImage = $("<img>");

            characterImage.attr("src", results[j].images.fixed_height.url);

            $(characterDiv).append(p, characterImage);

            $("#gifHolder").prepend(characterDiv);
           
        }
    });
} 
        
);


$("#userButton").on("click", function(e) {
    e.preventDefault();
    var newButton = $("#textBox").val();
    characterNames.push(newButton);
    console.log(newButton);
    $("#buttonHolder").empty();
    nameButtons();
});

