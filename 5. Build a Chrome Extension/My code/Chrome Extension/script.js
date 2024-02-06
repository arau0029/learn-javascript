let myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
const inputBtn = document.getElementById('input-btn')
const tabBtn = document.getElementById('tab-btn')
const inputEl = document.getElementById('input-el') 
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings
//JSON.stringify() and JSON.parse()

// falsy values:
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// check if value is truthy or falsy: Boolean()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

tabBtn.addEventListener('click', () => {
    //Chrome extension get current tab
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })

})

// function renderLeads() {
//     let listItems = ''
//     for (let i = 0; i < myLeads.length; i++) {
//         // ulEl.innerHTML += `<li>${myLeads[i]}</li>`
//         // OR
//         // create element
//         // const li = document.createElement('li')
//         // li.textContent = myLeads[i]
//         // ulEL.append(li)
//         listItems += `
//             <li>
//                 <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
//             </li>`
//     }
//     // We're doing this outside to improve performance; DOM manipulation comes with a cost
//     ulEl.innerHTML = listItems
// }

// Let's make the renderLeads() a bit more dynamic 

function render(leads) {
    // we can have more than one parameter in a function
    // parameters are INSIDE of a function, arguments outside (so what we decide to pass)
    let listItems = ''

    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">${leads[i]}</a>
            </li>`
    }
    ulEl.innerHTML = listItems
}