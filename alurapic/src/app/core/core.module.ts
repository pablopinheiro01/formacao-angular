import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestInterceptor } from './auth/request.interceptor';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [HeaderComponent ],
    exports: [ HeaderComponent ],
    imports: [ CommonModule,
                RouterModule
            ]
    ,providers: [ {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true//caso tenha outros interceptadores ele delega para o proximo e assim sucessivamente
    }]

})
export class CoreModule{

}