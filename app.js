const triangle = (sideOne, sideTwo, sideThree) => {
  if(isTriangle(sideOne, sideTwo, sideThree)){
    return triangleType(sideOne, sideTwo, sideThree);
  }else{
    return "These sides do not form a triangle";
  }
};
const triangleType= (sideOne, sideTwo, sideThree) => {
  if(sideOne === sideTwo && sideTwo === sideThree){
    return "Equilateral";
  }else if(sideOne === sideThree || sideTwo === sideThree || sideOne === sideThree){
    return "Isosceles";
  }else{
    return "Scalene";
  }
};
const isTriangle = (sideOne, sideTwo, sideThree) =>{
  return sideOne <= (sideTwo + sideThree) && sideTwo(sideOne + sideThree) && sideThree(sideOne + sideTwo);
};
$(document.ready(() => {
     $("form#fields").submit((event) =>{
       var fieldOne = parseInt($("input#field-one").val());
       var fieldTwo = parseInt($("input#field-two").val());
       var fieldThree = parseInt($("input#field-three").val());
       const result = triangle(sideOne, sideTwo, sideThree);

       sideOne = parseInt($("input#field-one").val(""));
       sideTwo = parseInt($("inpuit#field-two").val(""));
       sideThree = parseInt($("input#field-three").val(""));

       $("#result").append(result);
       event.preventDefault();
     });

});
