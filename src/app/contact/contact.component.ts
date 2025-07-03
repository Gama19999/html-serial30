import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

import { strings_es } from '../../assets/strings/strings_es';
import { environment } from '../../environments/environment';
import { PublicApiService } from '../services/public-api.service';
import { ScrollService } from '../services/scroll.service';
import { LinksComponent } from '../shared/links/links.component';
import { becauseValidator, getImagePath, emptyTxtValidator, policyValidator } from '../shared/util/util.functions';
import {ToastCloseEvent} from "primeng/toast";

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [MessageService]
})
export class ContactComponent implements OnInit, OnDestroy {
  private scrollSubs: Subscription | undefined;
  protected readonly s = strings_es;
  protected readonly links = LinksComponent;
  showToTop: boolean = false;
  whatsapp: string = environment.whatsapp;
  mailto: string = environment.email;
  form!: FormGroup;
  policyAgree: boolean = false;

  constructor(private scrollSrv: ScrollService, private publicApiSrv: PublicApiService, private messageSrv: MessageService) {}

  ngOnInit() {
    this.scrollSubs = this.scrollSrv.scrollDown.subscribe(s => this.showToTop = s);
    this.form = new FormGroup({
      subject: new FormControl(null, [Validators.required, Validators.maxLength(50), emptyTxtValidator()]),
      user: new FormControl(null, [Validators.required, Validators.maxLength(50), emptyTxtValidator()]),
      contactType: new FormControl('none', [Validators.required]),
      contactDir: new FormControl(null, [Validators.required]),
      project: new FormControl('none', [Validators.required]),
      because: new FormControl('none', [Validators.required, becauseValidator()]),
      message: new FormControl(null, [Validators.required, emptyTxtValidator()]),
      policy: new FormControl('disagree', [Validators.required, policyValidator()])
    });
  }

  getImg = (img: string)=> getImagePath('contact', img);

  resetPolicy() {
    this.policyAgree = false;
    this.form.controls['policy'].setValue('disagree');
  }

  showContactDir() {
    if (this.form.controls['contactType'].value === 'em')
      this.form.setControl('contactDir', new FormControl(null, [Validators.required, Validators.email]));
    else if (this.form.controls['contactType'].value === 'wh')
      this.form.setControl('contactDir', new FormControl(null, [Validators.required, Validators.min(1111111111), Validators.max(9999999999)]));
    else
      this.form.setControl('contactDir', new FormControl(null, [Validators.required]))
  }

  togglePolicy() {
    this.policyAgree = !this.policyAgree;
    this.form.controls['policy'].setValue(this.policyAgree ? 'agree' : 'disagree');
  }

  canShowPolicyBtn(): boolean {
    for (let controlName in this.form.controls)
      if (controlName !== 'policy' && this.form.controls[controlName].invalid) return false;
    return true;
  }

  isValidForm = (): boolean => this.form.touched && this.form.valid;

  submitMessage() {
    console.log(this.form.value);
    this.publicApiSrv.stackMessage(this.form.value, this.messageSrv);
  }

  resetForm(evt: ToastCloseEvent) {
    if (evt.message.severity !== 'error')
      this.form.reset({
        contactType: 'none',
        project: 'none',
        because: 'none',
        policy: 'disagree'
      });
  }

  ngOnDestroy() {
    this.scrollSubs?.unsubscribe();
  }
}
