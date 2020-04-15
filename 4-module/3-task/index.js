/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    Array.from(table.tBodies[0].rows).forEach(row => {
        
        let status = row.cells[3];
            if(status.hasAttribute('data-available')) {
                row.classList.add(status.dataset.available === "true" ? 'available' : 'unavailable');
            } else {
                row.hidden = true;
            }
            
        let gender = row.cells[2];
            row.classList.add(gender.textContent === 'm' ? 'male' : 'female');

        let age = row.cells[1];
            if(+age.textContent < 18) row.style.textDecoration = 'line-through';
    })
}
