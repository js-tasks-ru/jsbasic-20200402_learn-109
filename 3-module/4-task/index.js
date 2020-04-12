/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  return data
    .filter(item => (item.age <= age))
    .reduce((prev, item) => {
      let statement = `${item.name}, ${item.balance}`;
      return (prev) ? prev + '\n' + statement : statement;
    }, '');
}
