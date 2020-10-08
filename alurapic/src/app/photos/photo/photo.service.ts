import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './Photo';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient){ }

    listFromUser(userName: String){ 
    //observable só busca os dados se alguem estiver escrito nele
    // é utilizado observablw no lugar das promisses em angular
        return this.http.get<Photo[]>(API + '/' + userName + '/photos');
    }
    
    listFromUserPaginated(userName: string, page: number){
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Photo[]>(API + '/' + userName + '/photos',{ params: params});
    }

}