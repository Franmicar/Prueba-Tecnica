import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public langs: string[] = ['en', 'es', 'fr'];

  constructor(public translate: TranslateService) {
    this.translate.addLangs(this.langs);
    this.translate.use('es');
   }

   changeLang(lang: string){
     this.translate.use(lang);
     console.log(lang);
   }
}
