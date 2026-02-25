import { Generations } from "../generations/generations";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
}) // provding service in whole app

export class GenerationsService {
    

    private apiUrl='https://pokeapi.co/api/v2/generation';

    constructor(private http:HttpClient){

    }

    GenerationsbyId(id: string):Observable<any>
{
    return this.http.get(`${this.apiUrl}/${id}`);
}   
}


