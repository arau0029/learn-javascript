const inputBtn = document.getElementById('input-btn')
let myLeads = []
const inputEl = document.getElementById('input-el') 
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
})

function renderLeads() {
    let listItems = ''

    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += `<li>${myLeads[i]}</li>`
        // OR
        // create element
        // const li = document.createElement('li')
        // li.textContent = myLeads[i]
        // ulEL.append(li)

        listItems += `
            <li>
                <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
            </li>`
    }

    // We're doing this outside to improve performance; DOM manipulation comes with a cost
    ulEl.innerHTML = listItems
}
