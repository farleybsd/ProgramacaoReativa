/**
 * ? Ele cria um observável para uma solicitação Ajax com um objeto de solicitação com url, cabeçalhos, etc ou uma string para uma URL.
 */

 const { ajax } = require('rxjs/ajax');
 const { map, catchError } =require('rxjs/operators');
 const { of } = require('rxjs');
 
 const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);

