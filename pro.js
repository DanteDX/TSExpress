// creating new prototype
var Boat = function(modelName){
    this.modelName = modelName;
}

Boat.prototype.getModelName = function(){
    return this.modelName;
}

Boat.prototype.changeModelName = function(newModel):void{
    if(!this.modelName){
        return false;
    }
    this.modelName = newModel;
    return true;
}

let b = new Boat('Tesla');
console.log(b.getModelName());
b.changeModelName('Samsung');
console.log(b.getModelName());





