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
    console.log(buttons);

    

    $(buttonDiv).append(buttons);

}

var character = $(this).attr("button");


$("button").on("click", function(e) {

    console.log(e);
    
    
    
       var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + e.target.innerText + "&api_key=1DR7K9QuCUV2GxyoEqNw6ovh1OmJtds9&limit=10";

        console.log(characterNames[i]);
        

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

