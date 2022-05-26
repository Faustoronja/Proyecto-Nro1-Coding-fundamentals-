export function rollthedice (max,min){
    return Math.ceil(Math.random()*(max-min))+min
}

console.log(rollthedice(6,1))