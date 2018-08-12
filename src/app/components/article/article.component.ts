import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../core/models/article'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article

  constructor() {
   // this.article = new Article("1", "Bài viết 1", "Some text ...");
  }

  ngOnInit() {
  }

}
