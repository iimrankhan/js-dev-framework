import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
  return get('users');
}

function get(url){
  debugger;
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response){
  debugger;
  return response.json();
}

function onError(error){
  console.log(error);
}
