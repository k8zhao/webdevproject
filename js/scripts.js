//function to validate the form fields when form is submitted
function validate() {
    var zip = $('#zip').val();
    if (zip.length !=5 || isNaN(zip)) {
        alert("Zip Code is not valid or not in valid format.");
        return false; 
    }
}