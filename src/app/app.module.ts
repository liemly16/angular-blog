import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleComponent } from './components/article/article.component';
import { AppRoutingModule } from './/app-routing.module';
import { PostComponent } from './components/post/post.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticlePipe } from './pipes/article.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NavigationComponent,
    FooterComponent,
    ArticleListComponent,
    ArticleComponent,
    PostComponent,
    ArticleDetailComponent,
    ArticlePipe,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
