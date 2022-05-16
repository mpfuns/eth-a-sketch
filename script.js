
let container = document.querySelector('#container');





function gridAreaDiv(num, pre) {

    // creates the divs 
    for (let i =0; i < num; i++) {
        let div = document.createElement("div");
        div.className = "grid";
        //removal of div
        div.id="grid"+i;
        div.textContent = 'grid' + i;
        container.appendChild(div);

    }
    

    //this makes each  one have a hover effect
    const total = document.querySelectorAll('.grid');

    total.forEach((grid) => {
        grid.onmouseover = function () {
            grid.style.backgroundColor = 'pink';
        };
        grid.onmouseout = function () {
            grid.style.backgroundColor = 'white';
        }

    });




};
function removeGrid(pre, second) {
    

    if (pre > 0 && pre > second) {
        let rip = pre - second;
        let update = pre - rip;


        console.log("I'm outside of loop");
        for (let i = 0; i < update; i++) {
            console.log("I'm inside");
            let removalGridArea= document.querySelector("#grid")
            let subtract = removalGridArea[i];
                container.removeChild(subtract);
        }

    }
    else if (pre > 0 && pre < second) {
        let plus = second - pre;
        gridAreaDiv(plus,pre);

    }
    else if (pre == 0) {
        gridAreaDiv(second,pre);
    }

    else {

    };
}




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
    anwser(need);
};


