
let container = document.querySelector('#container');

function randomColor() {
    
    
    
    // for hsl()
    let hue= (Math.floor(360*(Math.random()))); 
    let saturation=100;
    let lightness= 50;
    
    let color= `hsl(${hue},${saturation}%,${lightness}%)`;

    return color;
    
 };
 function shading (){
    let shade= document.querySelector('.grid');
    // get in r,g,b
    let oldColor=shade.style.backgroundColor;
    let rbgstring=oldColor.slice(4, -1);
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
    console.log(newColor);
    return newColor;


}

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
 }

 /*
 function activateColor (){
    let grids=document.querySelectorAll('.grid');
    console.log(grids);
    grids.forEach((grid)=>{
        let color= grid.style.backgroundColor;
        console.log(color);
        switch (color){
    
            case('hsl(0, 0%, 100%)'): 
                randomColor();
                console.log(`I'm here in random`);
            break;
            
            default:
               shading();
               console.log(`I'm here in shading`);
        };})
    
 };
 */


function gridAreaDiv(num, pre) {

    // crating the grid 
    for (let i = pre; i < num; i++) {
        let div = document.createElement("div");
        div.className = "grid";
        container.appendChild(div);
    }


    //this makes each  one have a hover effect
    const total = document.querySelectorAll('.grid');

    total.forEach((grid) => {
         
        grid.onmouseout = function () {
            let color= grid.style.backgroundColor;
            console.log(color);
            switch (color){
        
                case('hsl(0, 0%, 100%)'): 
                grid.style.backgroundColor= randomColor();
                    console.log(`I'm here in random`);
                break;
                
                default:
                    grid.style.backgroundColor=shading();
                   console.log(`I'm here in shading`);
            };
               
        };
    });




};

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