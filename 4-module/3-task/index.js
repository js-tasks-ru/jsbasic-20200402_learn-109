/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    Array.from(table.tBodies[0].rows).forEach(row => {
        
        let status = row.cells[3];
            row.classList.add(status.dataset.available === "true" ? 'available' : 'unavailable');
            row.hidden = !status.hasAttribute('data-available');

        let gender = row.cells[2];
            row.classList.add(gender.textContent === 'm' ? 'male' : 'female');

        let age = row.cells[1];
            row.style.textDecoration = (+age.textContent < 18) && 'line-through';
    })
}
