let sum = 0
let term = {
    Belarus: 12,
    Ukraine: 22,
    Russia: 10,
    USA: -11
}
for(let i in term) sum+=term[i]
console.log('Средняя температура всех стран: ' + sum/Object.keys(term).length)
function max(term) {
    let maxt = Number.MIN_VALUE
    for(let i in term) {
        maxt = maxt < term[i] ? term[i]:maxt
    }
    console.log('Максимальная температура: ' + maxt)
}
max(term)