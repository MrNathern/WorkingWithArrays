var wrapperEle = document.body.querySelector(".wrapper")
// The array
var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

// 'for' sequence for the array
for (var i=0; i<warriors.length; i++){
    var ele = document.createElement("div");
    var nameEle = document.createElement("h2");
    var dmgEle = document.createElement("h4");
    var hpEle = document.createElement("h4");
    nameEle.innerHTML="Name:"+warriors[i].name;
    dmgEle.innerHTML="Damage:"+warriors[i].damage;
    hpEle.innerHTML="Health:"+warriors[i].health;
    ele.appendChild(nameEle);
    ele.appendChild(dmgEle);
    ele.appendChild(hpEle);
    wrapperEle.appendChild(ele);
}
