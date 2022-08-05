import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpOptions } from "./model/request.dto";
import { Observable } from "rxjs";
import { LocalStorageService } from "./local-store.service";
export enum Verbs {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE'
}
@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {}
    get<T>(options: HttpOptions): Observable<T> {
        return this.httpCall(Verbs.GET, options);
    }

    delete<T>(options: HttpOptions): Observable<T> {
        return this.httpCall(Verbs.DELETE, options);
    }

    post<T>(options: HttpOptions): Observable<T> {
        return this.httpCall(Verbs.POST, options);
    }

    put<T>(options: HttpOptions): Observable<T> {
        return this.httpCall(Verbs.PUT, options);
    }
    httpCall(verb: Verbs, options: HttpOptions): Observable<any> {
        options.body = options.body ?? null;
        options.headers = options.headers ?? {};
        options.isAuthentication = options.isAuthentication ?? true;
        if (options.isAuthentication) {
            options.headers = { ...options.headers, Authorization: `Bearer ${this.localStorage.getData('')}` };
        }
        return this.http.request(verb, `${options.url ?? 'URL'}/${options.path}`, {
            body: options.body,
            headers: options.headers,
            params: options.params ?? null,
            responseType: options.responseType || 'json',
            observe: options.observe || 'body'
        });
    }
}