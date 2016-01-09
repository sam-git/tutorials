// Your code here
function Tiger() {
	this.energy = 10;
}

Tiger.prototype.act = function(view){
  var cow = view.find("O");
  if (cow)
    return {type: "eat", direction: cow};
  var space = view.find(" ");
  if (space)
    return {type: "move", direction: space};
}

function SmartPlantEater() {
  this.energy = 20;
  this.age = 0;
  this.direction = randomElement(directionNames);
}

SmartPlantEater.prototype.act = function(view) {
  this.age++;
  var space = view.find(" ");

  if (view.look(this.direction) == " ") {
    return {type: "move", direction: this.direction};
  }
  if (this.energy > 60 && space) {
    return {type: "reproduce", direction: space};
  }
  var plant = view.find("*");
  if (plant) {
    return {type: "eat", direction: plant};
  }
  if (space) {
    this.direction = space;
    return {type: "move", direction: this.direction};
  }
};
