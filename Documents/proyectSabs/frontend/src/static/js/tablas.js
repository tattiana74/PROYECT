//tabla
function filtrado(){
    if (modulePath.includes('usuarios.html')) {
        
        setTimeout(initializeDataTable, 100);  
    }
}
function initializeDataTable() {
    const dataTable = new simpleDatatables.DataTable("#miTabla", {
    searchable: true,
    fixedHeight: true,
    perPage: 5,
    });
}