import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.overgrow();
    this.chlorophyll();
  }

  getPokemon() {
    return this._http.get("https://pokeapi.co/api/v2/pokemon/1/");
  }
  overgrow() {
    let overgrow = this._http.get("https://pokeapi.co/api/v2/ability/65/");
    overgrow.subscribe((data: any) => {
      console.log(
        `${data.pokemon.length} Pokemon have the ${data.name} ability!`
      );
    });
  }

  chlorophyll() {
    let chlorophyll = this._http.get("https://pokeapi.co/api/v2/ability/34/");
    chlorophyll.subscribe((data: any) => {
      console.log(
        `${data.pokemon.length} Pokemon have the ${data.name} ability!`
      );
    });
  }
}
