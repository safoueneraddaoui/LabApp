import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app_config';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab: any[] = []
  constructor() {
    this.tab = GLOBAL._DB.members;
  }
    saveMember(member: any): Promise < Member > {
      //return this.httpClient.post<Member> //backend
      //('linkToAPiRest',member).toPromise();

const memberToSave={
    id : member.id ?? Math.ceil(Math.random() * 1000).toString(),
    dateCreated: member.dateCreated ?? new Date().toISOString(),
    ...member};

this.tab = [memberToSave,  ...this.tab.filter(item => item.id !== member.id)];
return new Promise(resolve => resolve(memberToSave));
}

getMemberById(id:string): Promise <Member>
{
  //return this.httpClient.get<Member>('linktoRestAPI').toPromise();
  return new Promise (resolve => resolve (
  this.tab.filter(item=>item.id==id) [0] ?? null));
}

RemoveMemberById(id : string) : Promise <void>
{
  //return this.httpClient.delete <void> ('linkToRestAPI')
  //.toPromise():

  this.tab=this.tab.filter(item=>item.id!==id);
  return new Promise(resolve => resolve());
}

GetAllmembers(): Promise <Member[]>{
  return new Promise (resolve => resolve (this.tab));
}


}
