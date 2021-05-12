import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form: any;
  item: any;
  currentItemId: string = "";

  constructor(private memberService: MemberService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    if (!!this.currentItemId) {
      this.memberService.getMemberById(this.currentItemId).then(item => {
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
        cin: new FormControl(item?.cin, [Validators.required]),
        name: new FormControl(item?.name, [Validators.required]),
        cv: new FormControl(item?.cv, [Validators.required]),
        type: new FormControl(item?.type, [Validators.required])
      }
    );
  }

  onSubmit(): void {
    console.log(this.form.value);
    const objectToSubmit = { ...this.item, ...this.form.value };
    this.memberService.saveMember(objectToSubmit).then(() => this.router.navigate(['./members']));
  }

  IsFormInEditMode():boolean{
    return (!!this.currentItemId);
  }


}
