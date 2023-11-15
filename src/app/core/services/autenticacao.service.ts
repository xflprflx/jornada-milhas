import { Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apiUrl = environment.apiUrl;

  constructor(private userService: UserService, private http: HttpClient) {}

  autenticar(
    email: string,
    senha: string
  ): Observable<HttpResponse<AuthResponse>> {
    return this.http
      .post<AuthResponse>(
        `${this.apiUrl}/auth/login`,
        { email, senha },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const authtoken = response.body?.access_token || '';
          this.userService.salvarToken(authtoken);
        })
      );
  }
}
