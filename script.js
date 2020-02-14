var colors = [
  {color: "blue"}, 
  {color: "green"}, 
  {color: "purple"}
]
var boxes=[];
function box(color){
var that = this;
this.color= color;
  this.number = 0;
  this.ele = document.createElement("div");
  this.ele.style.backgroundColor = this.color;
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  this.ele.style.borderRadius = "10px";
  this.numberEle = document.createElement("div");
  this.numberEle.style.fontSize = "18px";
  this.numberEle.style.textAlign = "center";
  this.numberEle.style.lineHeight = "100px";
  this.numberEle.innerHTML = this.number;
  this.ele.appendChild(this.numberEle);  
  
  this.ele.addEventListener("click", function(){
    that.addUp();
  });   
  
  document.body.appendChild(this.ele);
}

box.prototype.addUp = function(){
  this.number++;
  this.numberEle.innerHTML = this.number;
}

for(var i = 0; i < colors.length; i++){
  boxes.push(new box(colors[i].color));
}