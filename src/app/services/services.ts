import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class Service{

    constructor(private httpClient : HttpClient){

    }

    getMatches(){
        this.httpClient.get('http://localhost:8080/getMatches');
    }

    getPlayers(){         
        this.httpClient.get('http://localhost:8080/players');
    }

}

