import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticlesService } from '../article.service';

import { Article } from '../article';
// import router
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  
  //article: Article[];
    article: Article;

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //const _id = this.route.snapshot.paramMap.get('_id');
    const slug = this.route.snapshot.paramMap.get('slug');
    this.getArticle(slug);
  }

  // getArticle(_id): void {
  //   this.articlesService.getArticle(_id).subscribe(
  //     (response:any) => {
  //       this.article = response.article
  //     }
  getArticle(slug:string): void {
    this.articlesService.getArticle(slug).subscribe(
      (response:any) => {
        this.article = response.article
      //  console.log(this.article)
      }
    );
  }
  deleteArticle(_id: string): void {
   if(confirm("Are you sure to delete " + this.article.title)) {
     this.articlesService.deleteArticle(_id).subscribe(
       ()=>{this.router.navigate(['/articles'])}
     );
   }
  
  }
}