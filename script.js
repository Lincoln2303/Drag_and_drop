// II.02. We'll add fill:
const fill = document.querySelector('.fill');
// II.03. We'll add empty class: (NOTE: with quertSelectorAll)
const empties = document.querySelectorAll('.empty');

// II.01. We'll add here first our drag function:
// NOTE: We can find these event in the mdn DOCS!
function dragStart() {
    // Testing:
    // console.log('drag start');
    // II.09. Here we'll append the class hold when this function fires:
    this.className += ' hold';
    // II.10. We'll add here a setInterval(): (NOTE: With this we'll remove the picture from the box)
    setTimeout(() => this.className = 'invisible', 0) 
}

function dragEnd() {
    // Testing:
    // console.log('drag end');
    // II.11. Here we'll add the fill class to the next box: (NOTE: Where we leave the pictre)
    this.className = 'fill';
}

function dragOver(e) {
    // Testing:
    // console.log('drag over');
    // II.13. We'll call preventDefault on that first: (NOTE: It'll stop the default behavior)
    e.preventDefault();
}

function dragEnter(e) {
    // Testing:
    // conso le.log('drag enter');
    // II.13. We'll call preventDefault on that first: (NOTE: It'll stop the default behavior)
    e.preventDefault();
    // II.14. We'll add the class hovered: (NOTE: For the empty boxes where we hover)
    this.className += ' hovered';
}

function dragLeave() {
    // Testing:
    // console.log('drag leave');
    // II.15. Here we'll remove the hovered class on the boxes we leave: (NOTE: We'll set it back to empty)
    this.className = 'empty';
}

function dragDrop() {
    // Testing:
    // console.log('drag drop');
    // II.12. Here we'll add the empty class, and append the fill class for that:
    // AFTER: We have to pass in an event object for dragOver, and dragEnter
    this.className = 'empty';
    this.append(fill);
}


// II.04. We're adding an eventListener to fill: (NOTE: We use the event "dragstart" => That's how they call it!, and then we call dragstart)
fill.addEventListener('dragstart', dragStart);

// II.05. Then we'll do the same with dragEnd:
// NOTE: The rest of the functions will go into the empyt boxes! 
fill.addEventListener('dragend', dragEnd);

// II.06. We'll use for of loop for the empty boxes:
for(const empty of empties){
    // II.07. Here we want to use the empty variable, and we want to add an eventlistener:
    empty.addEventListener('dragover', dragOver);
    // II.08. We'll add the 3 remaining function in the same way: (NOTE: Test it after, if they print out what they have to!)
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    // NOTE: Drop is the only exception!
    empty.addEventListener('drop', dragDrop);
}


