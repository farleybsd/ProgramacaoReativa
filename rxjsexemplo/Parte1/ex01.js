const {interval} = require("rxjs")

const obs =interval(1000) // Gerando Dados que retorna um Observer

const sub1 = obs.subscribe(num =>{
    console.log(num)
}) // se inscrevendo em um Observer

const sub2 = obs.subscribe(num =>{
    console.log(num * 100)
})

setTimeout(()=>{
    sub1.unsubscribe() // removendo a inscriacao em um Observer
    sub2.unsubscribe() // removendo a inscriacao em um Observer
},6000)
