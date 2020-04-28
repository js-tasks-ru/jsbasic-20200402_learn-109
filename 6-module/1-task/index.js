/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */


export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.elem.innerHTML = `<thead>
                            <tr>
                              <th>Имя</th>
                              <th>Возраст</th>
                              <th>Зарплата</th>
                              <th>Город</th>
                              <td></td>
                            </tr>
                            </thead>
                            <tbody>
                              ${createStringRows()};
                            </tbody>`;

    this.elem.onclick = removeClickedRow;

    function removeClickedRow(event) {
      if (event.target.tagName === "BUTTON") event.target.closest('tr').remove();
    }

    function createStringRows() {
      return rows.reduce((prev, item) => {
        prev += '<tr>';
        for (let prop in item) {
          prev += `<td>${item[prop]}</td>`;
        }
        return `${prev}<td><button>X</button></td></tr>`;
      }, '');
    }
  }
}