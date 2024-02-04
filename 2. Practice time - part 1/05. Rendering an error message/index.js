// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
const purchaseError = document.getElementById('purchase');
const error = document.getElementById('error');

purchaseError.addEventListener('click', () => {
    error.innerText = 'Something went wrong, please try again';
})
