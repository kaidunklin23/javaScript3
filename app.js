var shonda = 1;
var kaija = 18;
function additionFunction (kaija,shonda){
return kaija + shonda;
};
console.log(additionFunction(kaija,shonda));
var mike = 2;
function additionOne ( kaija,shonda,mike){
    return kaija + shonda + mike;
}
console.log(additionOne(kaija,shonda,mike));

var austin = 5;
function additionTwo (kaija,shonda,mike,austin){
    return kaija + shonda + mike + austin;
}
console.log(additionTwo(kaija,shonda,mike,austin));

var  kangaroo ={
    "name": "kaija",
    "action": "hop",
    "tailSize": "long"
};
var  microphone ={
    "name": "micheal",
    "sound": "loud",
    "color": "pink"
};
var  flower ={
    "name": "lily",
    "color": "purple",
    "scent": "sweet"
};
console.log(kangaroo.action);
console.log(microphone.color);
console.log(flower.scent);
console.log(kangaroo['name']);
console.log(microphone['color']);
console.log(flower['name']);
kangaroo.tailSize = "short";
microphone.color = "black";
flower.scent = "stinks";
kangaroo["name"] = "karima";
microphone["sound"] = "quiet";
flower["color"] = "yellow";
