import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { throwError, catchError, tap, BehaviorSubject } from "rxjs";

import { User } from "./user.model";

export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user = new BehaviorSubject<User>(null);

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDK6_bj44IVXSc2woOQSMYYbI09OKugTUI',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
        .pipe(catchError(this.handleErrors), tap(resData => {
            this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    };

    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }

        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
        );

        if (loadedUser.token) {
            this.user.next(loadedUser);
            // const exprDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        }
    };

    private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expireDate);

        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleErrors(errorRes: HttpErrorResponse) {
        let errorMessage = 'Unknown Error Occured!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }

        switch (errorRes.error.error.message) {
            case 'INVALID_EMAIL':
                errorMessage = 'Invalid Email!';
                break;
            case 'EMAIL_EXISTS':
                errorMessage = 'Email already exists!';
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                errorMessage = 'Invalid username or password';
                break;
            case 'USER_DISABLED':
                errorMessage = 'The user account has been disabled by an administrator';
                break;
        }

        return throwError(errorMessage);
    }
}