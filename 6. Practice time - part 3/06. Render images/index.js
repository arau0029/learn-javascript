// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const container = document.getElementById('container')

function render(arr) {
    let teamImages = ''

    for(let i = 0; i < arr.length; i++) {
        teamImages += `
            <img alt="Employee of the company" class="team-img" src="${arr[i]}">
        `
    }

    container.innerHTML = teamImages
}

render(imgs)