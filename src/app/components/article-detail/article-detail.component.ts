import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../core/models/article'
import { ArticleService } from '../../services/article.service'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: Article

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {

  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    const id = this.route.snapshot.paramMap.get('id');

    this.article = this.articleService.findOne(id);
  }

}
