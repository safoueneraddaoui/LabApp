import { Injectable } from '@angular/core';
import {GLOBAL} from '../app/app_config';
import {Tools} from '../models/Tools';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  tab: any[] = []
  constructor() {
    this.tab = GLOBAL._DB.tools;
  }
  saveTools(tools: any): Promise < Tools > {
    //return this.httpClient.post<Member> //backend
    //('linkToAPiRest',member).toPromise();

    const toolsToSave={
      id : tools.id ?? Math.ceil(Math.random() * 1000).toString(),
      dateCreated: tools.dateCreated ?? new Date().toISOString(),
      ...tools};

    this.tab = [toolsToSave,  ...this.tab.filter(item => item.id !== tools.id)];
    return new Promise(resolve => resolve(toolsToSave));
  }

  getToolsById(id:string): Promise <Tools>
  {
    //return this.httpClient.get<Member>('linktoRestAPI').toPromise();
    return new Promise (resolve => resolve (
      this.tab.filter(item=>item.id==id) [0] ?? null));
  }

  RemoveToolsById(id : string) : Promise <void>
  {
    //return this.httpClient.delete <void> ('linkToRestAPI')
    //.toPromise():

    this.tab=this.tab.filter(item=>item.id!==id);
    return new Promise(resolve => resolve());
  }

  GetAllTools(): Promise <Tools[]>{
    return new Promise (resolve => resolve (this.tab));
  }


}
