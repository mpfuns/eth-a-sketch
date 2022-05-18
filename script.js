
let container = document.querySelector('#container');





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
        grid.onmouseover = function () {
            grid.style.backgroundColor = 'pink';
        };
        grid.onmouseout = function () {
            grid.style.backgroundColor = 'grey';
        }

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
            grid.style.backgroundColor = 'white';
        });

    }
    //add grid 
    else {
        gridAreaDiv(second, pre);
            //reset color of div 
        if( pre>0){
        const total = document.querySelectorAll('.grid');

        total.forEach((grid) => {
            grid.style.backgroundColor = 'white';
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



