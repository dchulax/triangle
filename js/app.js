function triangle (){

  var one = (document.getElementById("sideOne").value);
  var two = (document.getElementById("sideTwo").value);
  var three = (document.getElementById("sideThree").value);
  var result;
if((one+two > three) || (two+three > one || three+one > two)){
  if(one===two && two===three){
    result = "Equilateral";
  }else if(one === two || two === three || three === one){
    result = "Isosceles";
  }else{
    result = "Scalene";
  }
  console.log(result);
  document.getElementById("outcome").innerHTML=result;
}
}
