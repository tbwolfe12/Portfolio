function tableFunction() {
    let input, filter, table, tr, td, i, textval; 
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('Table');
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
    if (td) {
        textval = td.textContent || td.innerText;
    if (textval.toUpperCase().indexOf(filter) > -1 ) {
        tr[i].style.display = '';
    } else {
        tr[i].style.display = 'none'; 
    }
    }
    }
}
