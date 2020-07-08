var kaija = 18;
var shonda = 1;
function addition ( kaija,shonda){
return (kaija+shonda)
}

console.log(addition(kaija,shonda));

var mike = 2;
function addition ( kaija,shonda,mike){
    return (kaija+shonda+mike)
}
console.log(addition(kaija,shonda,mike));
var austin = 5;
function addition (kaija,shonda,mike,austin){
    return (kaija + shonda + mike + austin)
}
console.log(kaija,shonda,mike,austin);

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
console.log(kangaroo.action.hop);
console.log(microphone.color.pink);
console.log(flower.scent.sweet);

console.log(kangaroo[name]);
console.log(microphone[color]);
console.log(flower[name]);

kangaroo.tailSize = "short";
microphone.color = "black";
flower.scent = "stinks";

kangaroo["name"] = "karima";
microphone["sound"] = "quiet";
flower["color"] = "yellow";