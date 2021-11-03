/** 
**Internamente, o skipUntil operadora se inscreve no observável
*?  a fim de reconhecer a emissão de seu primeiro valor.
*! Quando isso acontece, o operador cancela a assinatura do notificador e começa a emitir
* os valores da fonte observável. Ele nunca permitirá que o observável de origem emita quaisquer
* valores se o notificador completar ou lançar um erro sem emitir um valor antes.
*TODO ( Ele faz a inscricao e  o cancelamento da inscricao de forma automatica)
*/

const { interval, fromEvent } = require("rxjs")
const { skipUntil } = require("rxjs/operators")

const intervalObservable = interval(1000);
const click = fromEvent(document, 'click', true);

const emitAfterClick = intervalObservable.pipe(
  skipUntil(click)
);

const subscribe = emitAfterClick.subscribe(value => console.log(value));