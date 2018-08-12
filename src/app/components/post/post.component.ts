import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router, Route } from '@angular/router'
import { ArticleService } from '../../services/article.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private articleService: ArticleService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(title: string, content: string, thumb: string) {
    this.articleService.addArticle(title, content, thumb);
    this.router.navigate(['/']);
  }

}
