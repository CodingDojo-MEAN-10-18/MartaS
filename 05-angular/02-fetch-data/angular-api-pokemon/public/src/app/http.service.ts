import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(){
    let lickitung = this._http.get('https://pokeapi.co/api/v2/pokemon/108/');
    lickitung.subscribe(data => {
      console.log('Got our Pokeman info', data);
      console.log(data['forms'][0].name)
      console.log(`${data['forms'][0].name}'s coolest ability is ${data['abilities'][0].ability.name} `)

      let abilityURL = data['abilities'][0].ability.url
      console.log(abilityURL)

      let ability = this._http.get(abilityURL)

      ability.subscribe(abilityData => console.log(`There are ${abilityData['pokemon'].length} other Pokemon with this same ability`))
    });
  }
}
