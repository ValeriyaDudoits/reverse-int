module.exports = function reverse(n) {
    let str = n.toString();
    let strMas = str.split('');
    let result = [];
    let j = 0;
    for (let i = strMas.length; i >= 0; i--) {
        result[j++] = strMas[i];
    }
    if (n < 0) {
        result.pop();
    }
    return +result.join('');
}
