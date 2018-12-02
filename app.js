$(document)(() => {
     $form#fields.submit((event) {
       var fieldOne = parseInt($("input#field-one").val('Enter only numbers'));
       var fieldTwo = parseInt($("input#field-two").val('Enter only numbers'));
       var fieldThree = parseInt($("input#field-three").val('Enter only numbers'));
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
         }
       }
     });
});
