/** 
**Internamente, o skipUntil operadora se inscreve no observável
*?  a fim de reconhecer a emissão de seu primeiro valor.
*? inscreve-se em cada Observable de entrada fornecida (como argumentos)
*?e simplesmente encaminha (sem fazer nenhuma transformação) todos os valores
*?de todos os Observáveis ​​de entrada para a saída Observable. A saída Observable
*?só é concluída quando todas as entradas Observables são concluídas. Qualquer
*?erro entregue por uma entrada Observable será imediatamente emitido na saída Observable.
*! Este operador e melhor usado quando voce deseja juntar valores entre observaveis mas com controle manual
*/


// RxJS v6+
const { of } = require('rxjs');
const { mergeMap } =require('rxjs/operators');

// helper to create promise
const myPromise = val =>
  new Promise(resolve => resolve(`${val} World From Promise!`));

// emit 'Hello'
const source$ = of('Hello');

// map to promise and emit result
source$
  .pipe(mergeMap(val => myPromise(val)))
  // output: 'Hello World From Promise'
  .subscribe(val => console.log(val));