const { Observable } = require("rxjs")

const obs = Observable.create(subscriber => {
    subscriber.next('RxJs') // passando dados para um Observale
    subscriber.next('è')
    subscriber.next('muito')
    subscriber.next('legal')
    if(Math.random() > 0.5){
        subscriber.complete()  // finalizando Observale
    }else{
        throw "Eita Mano!"
    }
    
    
})

    // setTimeout(()=>{
    //     subscriber.next('legal')
    //     subscriber.complete()  // finalizando Observale
    // })
    // },9000)


    obs.subscribe(
        texto => console.log(texto),
        err => console.log(err),
        () => console.log("FIM!")
    ) // Pegando os dados de um Observable