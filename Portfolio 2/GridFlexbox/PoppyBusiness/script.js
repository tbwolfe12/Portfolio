function valFunction() {
    let val = document.forms['contact']['fname'].value;
    if (val == '') {
        alert('You must provide a first name!');
        return false;
    }
    let val2 = document.forms['contact']['lname'].value;
    if (val2 == '') {
        alert ('You must provide a last name!');
        return false;
    }
};