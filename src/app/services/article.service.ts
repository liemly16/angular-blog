import { Injectable } from '@angular/core';
import { Article } from '../components/core/models/article'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[]
  constructor() {
    this.articles = [
      new Article("1", "Bài Viết 1", "Maiores possimus animi, modi hic eos accusamus deleniti sint delectus debitis assumenda, asperiores repudiandae enim veniam adipisci corporis, odio repellat ipsa! Voluptatum?"),
      new Article("2", "Bài Viết 2", "Maiores possimus animi, modi hic eos accusamus deleniti sint delectus debitis assumenda, asperiores repudiandae enim veniam adipisci corporis, odio repellat ipsa! Voluptatum?"),
      new Article("3", "Bài Viết 3", "Maiores possimus animi, modi hic eos accusamus deleniti sint delectus debitis assumenda, asperiores repudiandae enim veniam adipisci corporis, odio repellat ipsa! Voluptatum?"),
      new Article("4", "Bài Viết 4", "Maiores possimus animi, modi hic eos accusamus deleniti sint delectus debitis assumenda, asperiores repudiandae enim veniam adipisci corporis, odio repellat ipsa! Voluptatum?"),
      new Article("5", "Bài Viết 5", "Maiores possimus animi, modi hic eos accusamus deleniti sint delectus debitis assumenda, asperiores repudiandae enim veniam adipisci corporis, odio repellat ipsa! Voluptatum?"),
      new Article("6", "Bài Viết 6", "Maiores possimus animi, modi hic eos accusamus deleniti sint delectus debitis assumenda, asperiores repudiandae enim veniam adipisci corporis, odio repellat ipsa! Voluptatum?"),
      new Article("7", "Bài Viết 7", "Maiores possimus animi, modi hic eos accusamus deleniti sint delectus debitis assumenda, asperiores repudiandae enim veniam adipisci corporis, odio repellat ipsa! Voluptatum?"),
      new Article("8", "Bài Viết 8", "Maiores possimus animi, modi hic eos accusamus deleniti sint delectus debitis assumenda, asperiores repudiandae enim veniam adipisci corporis, odio repellat ipsa! Voluptatum?"),
    ]
  }

  generateArticle(): Article[] {
    return this.articles;
  }

  addArticle(title: string, content: string, thumb: string) {
    let temp = this.articles[this.articles.length - 1];

    let id = (parseInt(temp.id) + 1).toString();

    let article = new Article(id, title, content, thumb);

    this.articles.push(article);
  }

  findOne(id: string){
    return this.articles.find(article => article.id == id);
  }

}
