const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const prevEntry = document.getElementById("prev-entries");
let count = 0

incrementBtn.addEventListener("click", () => {
    count = count + 1;
    countEl.innerText = count;
} );

// or

// remeber to add the on-click="increment" att to the button
// function increment () {
    // count = count + 1;
    // countEl.innerText = count;
// }

function save() {
    console.log(count);
    // prevEntry.innerText =  prevEntry.innerHTML + ` ${count} -`
    prevEntry.innerText += ` ${count} -`
    count = 0
    countEl.innerText = count;
}

