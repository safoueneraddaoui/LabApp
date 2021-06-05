import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Member} from 'src/models/Member';
import {ArticleService} from 'src/services/article.service';
import {MemberService} from 'src/services/member.service';

@Component({
  selector: 'app-article-affect',
  templateUrl: './article-affect.component.html',
  styleUrls: ['./article-affect.component.css']
})
export class ArticleAffectComponent implements OnInit {

  selectedValue: string | undefined;
  item: any;
  currentItemId: string = '';

  Members: Member[] = [];

  constructor(private MS: MemberService, private activatedRoute: ActivatedRoute,
              private router: Router, private AS: ArticleService) {
  }

  ngOnInit(): void {
    this.MS.GetAllmembers().then(data => this.Members = data);
  }

  add(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentItemId);

    if (!!this.currentItemId) {
      this.AS.getArticleById(this.currentItemId).then(item => {
        this.item = item;
        this.item.auteur = this.selectedValue;
        console.log(this.item.auteur, this.item.id);
        this.AS.addArticleToMember(this.item).then(() => this.router.navigate(['./articles']));
      });
    }
  }

}
