import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = 'http://localhost:8000/api';
    app_version: string = '0.0.1';

    constructor(private http: HttpClient) { }

    get(endpoint: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/${endpoint}`);
    }

    post(endpoint: string, data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/${endpoint}`, data);
    }

    put(endpoint: string, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${endpoint}`, data);
    }

    delete(endpoint: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${endpoint}`);
    }
}