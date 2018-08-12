import { Injectable } from '@angular/core';
import { Article } from '../components/core/models/article'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  generateArticle(): Article[] {
    let articles: Article[] = [
      new Article("1", "Bài Viết 1", "Nội dung bài viết"),
      new Article("2", "Bài Viết 2", "Nội dung bài viết"),
      new Article("3", "Bài Viết 3", "Nội dung bài viết"),
      new Article("4", "Bài Viết 4", "Nội dung bài viết"),
      new Article("5", "Bài Viết 5", "Nội dung bài viết"),
      new Article("6", "Bài Viết 6", "Nội dung bài viết"),
      new Article("7", "Bài Viết 7", "Nội dung bài viết"),
      new Article("8", "Bài Viết 8", "Nội dung bài viết"),
    ]

    return articles;
  }

}
