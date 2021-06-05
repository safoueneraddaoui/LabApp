import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  form : any;
  item : any;
  currentItemId : string = "";

  constructor(private AS: ArticleService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.initForm(this.item);
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    if (!!this.currentItemId) {
      this.AS.getArticleById(this.currentItemId).then(item => {
        this.item = item;
        this.initForm(item);
      });
    }
    else {
      this.initForm(null);
    }
  }

  initForm(item: any): void {
    this.form = new FormGroup(
      {
        titre: new FormControl(item?.titre, [Validators.required]),
        type: new FormControl(item?.type, [Validators.required]),
        dateApparition: new FormControl(item?.dateApparition, [Validators.required]),
        lien: new FormControl(item?.lien, [Validators.required]),
        sourcePdf: new FormControl(item?.sourcePdf, [Validators.required])
      }
    );
  }

  onSubmit(): void {
    console.log(this.form.value);
    const objectToSubmit = { ...this.item, ...this.form.value };
    this.AS.saveArticle(objectToSubmit).then(() => this.router.navigate(['./articles']));
  }

  IsFormInEditMode():boolean{
    return (!!this.currentItemId);
  }

}
