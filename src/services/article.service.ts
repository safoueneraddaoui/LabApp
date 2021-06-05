import {Injectable} from '@angular/core';
import {GLOBAL} from 'src/app/app_config';
import {Article} from 'src/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab: any[] = [];

  constructor() {
    this.tab = GLOBAL._DB.articles;
  }


  GetAllarticles(): Promise<Article[]> {
    return new Promise(resolve => resolve(this.tab));
  }

  getArticleById(id: string): Promise<Article> {
    return new Promise(resolve => resolve(
      this.tab.filter(item => item.id == id) [0] ?? null));
  }

  addArticleToMember(item1: any): Promise<void> {
    this.tab = [item1, ...this.tab.filter(item => item.id !== item1.id)];
    return new Promise(resolve => resolve());
  }

  RemoveArticleById(id : string) : Promise <void>
  {
    //return this.httpClient.delete <void> ('linkToRestAPI')
    //.toPromise():

    this.tab=this.tab.filter(item=>item.id!==id);
    return new Promise(resolve => resolve());
  }

  saveArticle(article: any): Promise < Article > {
    //return this.httpClient.post<Member> //backend
    //('linkToAPiRest',member).toPromise();

    const articleToSave={
      id : article.id ?? Math.ceil(Math.random() * 1000).toString(),
      //dateCreated: article.dateCreated ?? new Date().toISOString(),
      ...article};

    this.tab = [articleToSave,  ...this.tab.filter(item => item.id !== article.id)];

    return new Promise(resolve => resolve(articleToSave));
  }
}


