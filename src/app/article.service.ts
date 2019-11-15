import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(
  {providedIn: 'root'
})
export class ArticlesService {
  private url: string = 'http://localhost:3000/api/articles';
  constructor(private http: HttpClient) { }
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }
  getArticle(title: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${title}`);
  }
  createArticle (article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, article, httpOptions);
  }
  editArticle (article: Article): Observable<Article> {
    return this.http.put<Article>(this.url, article, httpOptions);
  }
  deleteArticle (id: string): Observable<Article> {
    return this.http.delete<Article>(`${this.url}/${id}`);
  }
}
