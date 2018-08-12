import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component'
import { PostComponent } from './components/post/post.component'
import { ArticleDetailComponent } from './components/article-detail/article-detail.component'

const routes: Routes = [
  {
    path: '', component: ArticleListComponent
  },
  {
    path: 'post', component: PostComponent
  },
  {
    path: 'article/:id', component: ArticleDetailComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
