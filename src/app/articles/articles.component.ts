import { Component, OnInit } from '@angular/core';

// 1. Import the UserService
import { ArticlesService } from '../article.service';

// 2. Import the User Object/Schema
import { Article } from '../article';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  // 3. Create a articless property of type user
  articles: Article[];

  // 4. Inject the ArticlesService into the constructor
  constructor(private ArticlesService: ArticlesService) { }

  // 6. Make a call to the service on initialization
  ngOnInit() {
    this.getArticles();
  }

  // 5. Craete a local wrapper for
  getArticles(): void {
    this.ArticlesService.getArticles().subscribe(
      (response:any) => {
        this.articles = response.articles
//        console.log(this.users)
      }
    );
  }
}