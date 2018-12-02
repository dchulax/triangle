$(document)(() => {
     $form#fields.submit((event) {
       var fieldOne = parseInt($("input#field-one").val());
       var fieldTwo = parseInt($("input#field-two").val());
       var fieldThree = parseInt($("input#field-three").val());
       const triangles = (a,b,c) =>{
         if (this instanceof triangle){
           const this.a = a;
           const this.b = b;
           const this.c = c;
         }else{
           return new triangle[];
         }
       };
       triangles.prototype.kind= () => {
         if(this.a === 0 || this.b === 0 || this.c === 0){
           $("#not-triangle").show();
         }else if(this.a < 0 || this.b < 0 || this.c < 0){
           $("#invalid").show();
         }else if (this.a + this.b <= this.c || this.a + this.c <= b || this.a <= this.c){
           $("#invalid").show();
         }else if(this.a === this.b && this.b ==== this.c){
           $("#equilateral").show();
         }else if(this.a === this.b || this.b === this.c || this.a === this.c){
           $("#isosceles").show();
         }else{
           $("#scalene").show();
         }
       }
     });
});
