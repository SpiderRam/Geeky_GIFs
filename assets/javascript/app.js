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



for (var i = 0; i <= characterNames.length; i++){
    $("#buttonHolder").append(buttons);

    var buttonDiv = $("<div>");
    var buttons = $("<button>").text(characterNames[i]);

    

    $(buttonDiv).append(buttons);

}

/*$("button").on("click", function() {
    var character = $(this).attr("data-character");

    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + character + "1DR7K9QuCUV2GxyoEqNw6ovh1OmJtds9"

}*/

/*$("#questions").append("<input type='radio' name='question-" + i +
"' value='" + questions[i].answers[j] + "' id='" + idNameStrng + "' class='answers'>" + questions[i].answers[j]); */