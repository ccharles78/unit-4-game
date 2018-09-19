$(document).ready(function() {
var Characters = {
"Ahsoka Tano":{
  Name: "Ahsoka Tano",
  health: 120,
  Attack: 8,
  imageUrl: "../images/AhsokaTano.jpg",
  enemyAttackBack: 15,

},
  "Luke Skywalker": {
  Name: "Luke Skywalker",
  health: 100,
  Attack: 14,
  imageUrl: "../images/lukesky.jpg",
  enemyAttackBack: 5,
},
  "Anakin": {
  Name: "Anakin",
  health: 150,
  Attack: 8,
  imageUrl: "../images/Anakin.jpg",
  enemyAttackBack:5
},
  "Darth Vader":{
  Name: "Darth Vader",
  health: 180,
  Attack: 7,
  imageUrl: "../images/AhsokaTano.jpg",
  enemyAttackBack:25
}
};
var currentSelectedCharacter;
var combatants=[];
//render character
var renderOne = function(characters, renderArea,charStatus){
  var charDiv= $("<div class='character' data-name'" + characters.name + "'>");
  var charName= $("<div class='character-name'>").text(characters.name);
  var charImage= $("<img alt='image' class='character-image'>").attr("src",characters.imageUrl);
  var charHealth =$("<div class='character-health'>").text(characters.health);
  charDiv.append(charName).append(charImage).append(charHealth);
  $(renderArea).append(charDiv);
  if(charStatus ==="enemy"){
    $(charDiv).addclass("enemy")
    console.log(renderOne)
  }
}


//This function handles the rendering of characters based on which chosen
  
var renderCharacters = function(charobj,areaRender,){
  if(areaRender ==="#character-section"){
    $(areaRender).empty();
    for (var key in charobj){
      if (charobj.hasownproperty(key)){
        renderOne(charObj[key],areaRender,"");
      }
    }
  }
  if(areaRender ==="#selected-character"){
    renderOne(charobj, areaRender,"");
  }
  if(areaRender === "#available-to-attack-section"){
    for(var i=0; i < charobj.length; i++){
      renderOne(charobj[i], areaRender,"enemy")
    };
    $(document).on("click", ".enemy",function(){
      var name=($(this).attr("data-name"));
      if ($("#defender").children().length === 0){
        renderCharacters(name, "#defender");
        $(this).hide();
      }
    }
  )
  }
}

//Render all the characters to the page
renderCharacters(characters,"#characters-section");
});
$(document).on("click", ".characters",function(){
  var name= $(this).attr("data-name");
  if(!currentSelectedCharacter){
    currentSelectedCharacter=character[name];
      for (var key in characters){
      if(key !==name){
        combatants.push(characters[key]);
      }
    }
  $("#characters-section").hide();
  renderCharacters(currentSelectedCharacter,"#selected-character");
  renderCharacters(combatants,"#available-to-attack-section");
  }

})

