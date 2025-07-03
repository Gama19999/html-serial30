import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

import { strings_es } from '../../assets/strings/strings_es';
import { environment } from '../../environments/environment';
import { CustomMessage } from '../models/custom-message.model';
import { MsExchange } from '../models/ms-exchange.model';

@Injectable({ providedIn: 'root' })
export class PublicApiService {
  private readonly s = strings_es;

  constructor(private http: HttpClient) {}

  getApiVersion() {
    return this.http.get<MsExchange>(environment.api + 'status');
  }

  stackMessage(customMsg: CustomMessage, messageSrv: MessageService) {
    this.http.post<MsExchange>(environment.api + 'contact', customMsg).subscribe({
      next: success => this.handleStackMsgSuccess(success, messageSrv),
      error: failure => this.handleStackMsgFailure(failure, messageSrv)
    });
  }

  private handleStackMsgSuccess(success: MsExchange, messageSrv: MessageService) {
    console.log(success);
    messageSrv.add({severity: 'success', summary: this.s.contact_toast1, detail: this.s.contact_toast2, life: 3000, icon: 'pi-send'});
  }

  private handleStackMsgFailure(failure: any, messageSrv: MessageService) {
    console.error(failure);
    messageSrv.add({severity: 'error', summary: this.s.contact_toast3, life: 3000});
  }
}
