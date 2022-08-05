import { Injectable } from "@angular/core";

@Injectable()
export class AuthenService {
    constructor() {}
    login(authen: string) {}
    logout() {}
    isTokenValid(): boolean { return true; }
    startToken() {}
}