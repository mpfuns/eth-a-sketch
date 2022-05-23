
let container = document.querySelector('#container');

function shading (idColor){
    // get in r,g,b
       ;
       let oldColor=getComputedStyle(document.querySelector(`#${idColor}`), null).getPropertyValue("background-color");
       
     
       let rbgstring=oldColor.slice(5, -1);
       let rgbArray=rbgstring.split(",");
      
       let red=rgbArray[0];
       let green=rgbArray[1];
       let blue=rgbArray[2];
       //hsl coverstion 
       let oldhls= rgbToHsl(red,green,blue);
       let hue= Math.floor(oldhls[0]);
      
       let sat= Math.floor(oldhls[1]);
     
       let lig =Math.floor(oldhls[2]);
     
       let darken= lig-5;
       let newColor=`hsl(${hue},${sat}%,${darken}%)`;
       
       return newColor;
   
    


};

function rgbToHsl(r, g, b) {
   r /= 255;
 g /= 255;
 b /= 255;
 const l = Math.max(r, g, b);
 const s = l - Math.min(r, g, b);
 const h = s
   ? l === r
     ? (g - b) / s
     : l === g
     ? 2 + (b - r) / s
     : 4 + (r - g) / s
   : 0;
 return [
   60 * h < 0 ? 60 * h + 360 : 60 * h,
   100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
   (100 * (2 * l - s)) / 2,
 ];
 };


 function randomColor() {
   
   
   
   // for hsl()
   let hue= (Math.floor(360*(Math.random()))); 
   let saturation=100;
   let lightness= 65;
   
   let color= `hsl(${hue},${saturation}%,${lightness}%)`;

   return color;
   
};





 function gridAreaDiv(num, pre) {

   // crating the grid 
   for (let i = pre; i < num; i++) {
       let div = document.createElement("div");
       div.className = "grid";
       div.id="grid"+i;
       container.appendChild(div);
   }


   //this makes each  one have a hover effect
   const total = document.querySelectorAll('.grid');
   
   total.forEach((grid) => {
       grid.backgroundColor=`hsl(0, 0%, 100%)`;
       
       grid.onmouseout = function () {
           let idGrid = grid.getAttribute('id');
          
           let color= getComputedStyle(document.querySelector(`#${idGrid}`), null).getPropertyValue("background-color");
       
           /* let color= getComputedStyle(document.querySelector(`.grid`), null).getPropertyValue("background-color");
       console.log(color); */
       
       let regex = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/g;
       let found= color.match(regex); 
       
       switch (color){
   
           case(`rgba(0, 0, 0, 0)`): 
           grid.style.backgroundColor= randomColor();
               
           break;
           
           case(`${found}`):
           grid.style.backgroundColor=shading(idGrid);
           
           break;
           
           default:
               console.log(` this didn't work `);
       };  
       };
   });
 }

function removeGrid(pre, second) {

    //statement is for removal 
    if (pre > 0 && pre > second) {
        for (let i = pre; i > second; i--) {
            let removalGridArea = container.lastElementChild;
            removalGridArea.remove();
        }
        //reset color of div 
        const total = document.querySelectorAll('.grid');

        total.forEach((grid) => {
            grid.style.backgroundColor = 'hsl(0, 0%, 100%)';
        });

    }
    //add grid 
    else {
        gridAreaDiv(second, pre);
            //reset color of div 
        if( pre>0){
        const total = document.querySelectorAll('.grid');

        total.forEach((grid) => {
            grid.style.backgroundColor = 'hsl(0, 0%, 100%)';
        });

        } else{
            return 
        }
    }
};




//time the sides
function anwser(side) {
    let double = side * side;

    //div that was already on the page "total"
    let pageDiv = document.querySelectorAll('.grid');
    let area = pageDiv.length;
    removeGrid(area, double);

};

//input the sides 
function clear2() {
    let need = prompt("what size would you like the grid to be by?");
    if (need > 100) {
        alert("Max is 100 by 100,so please pick a different size.");
        clear2();
    }
    else {
        anwser(need);
    }

};