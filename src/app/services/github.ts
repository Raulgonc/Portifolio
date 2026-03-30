import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

@Injectable({ providedIn: 'root' })
export class GithubService {
  private http = inject(HttpClient);
  private username = 'Raulgonc';

  getRepos(): Observable<GithubRepo[]> {
    return this.http
      .get<GithubRepo[]>(
        `https://api.github.com/users/${this.username}/repos?sort=updated&per_page=20`
      )
      .pipe(
        map(repos => repos.filter(r => !r.fork && r.name !== 'Portifolio'))
      );
  }
}
