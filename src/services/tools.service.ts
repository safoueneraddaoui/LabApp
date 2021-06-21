import { Injectable } from '@angular/core';
import {GLOBAL} from '../app/app_config';
import {Tools} from '../models/Tools';
import {Article} from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  tab: any[] = [];

  constructor() {
    this.tab = GLOBAL._DB.tools;
  }


  GetAllTools(): Promise<Tools[]> {
    return new Promise(resolve => resolve(this.tab));
  }

  getToolsById(id: string): Promise<Tools> {
    return new Promise(resolve => resolve(
      this.tab.filter(item => item.id == id) [0] ?? null));
  }

  addToolsToMember(item1: any): Promise<void> {
    this.tab = [item1, ...this.tab.filter(item => item.id !== item1.id)];
    return new Promise(resolve => resolve());
  }

  RemoveToolsById(id : string) : Promise <void>
  {
    //return this.httpClient.delete <void> ('linkToRestAPI')
    //.toPromise():

    this.tab=this.tab.filter(item=>item.id!==id);
    return new Promise(resolve => resolve());
  }

  saveTools(tools: any): Promise < Tools > {
    //return this.httpClient.post<Member> //backend
    //('linkToAPiRest',member).toPromise();

    const toolsToSave={
      id : tools.id ?? Math.ceil(Math.random() * 1000).toString(),
      //dateCreated: article.dateCreated ?? new Date().toISOString(),
      ...tools};

    this.tab = [toolsToSave,  ...this.tab.filter(item => item.id !== tools.id)];

    return new Promise(resolve => resolve(toolsToSave));
  }
}


