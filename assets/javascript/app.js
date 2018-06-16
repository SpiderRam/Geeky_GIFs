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

const clickEventHandler = function() {
    var state = $(this).attr('data-state');

    if (state === "still") {
        var newSrc = $(this).attr("data-animate");
        $(this).attr("src", newSrc);
        $(this).attr("data-state", "animate");
    } else {
        var newSrc = $(this).attr("data-still");
        $(this).attr("src", newSrc);
        $(this).attr("data-state", "still");
    }
};



$(document).on('click', ".allButtons", function() {
    console.log("BUTTON CLICKED")
    var search = $(this).attr("data-type")
    
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=1DR7K9QuCUV2GxyoEqNw6ovh1OmJtds9&limit=10";
    console.log(queryUrl);
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){

        console.log(response);
        
        var results = response.data;
        console.log(results);

        for (var j = 0; j < results.length; j++) {
            var result = results[j];
            var characterDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[j].rating);
            var characterImage = $("<img>");

            characterImage.attr("src", result.images.fixed_height_still.url);
            characterImage.attr("data-state", "still");
            characterImage.attr("data-still", result.images.fixed_height_still.url);
            characterImage.attr("data-animate", result.images.fixed_height.url);
            
            characterImage.on("click", clickEventHandler);

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

