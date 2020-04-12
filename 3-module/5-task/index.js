/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str
		.split(',')
		.reduce((prev, item) => prev = prev.concat(...item.split(' ')), [])
		.filter(item => isFinite(item))
		.map(item => +item)
		.sort((a, b) => a - b);

	return { min: arr[0], max: arr[arr.length - 1] };
}
