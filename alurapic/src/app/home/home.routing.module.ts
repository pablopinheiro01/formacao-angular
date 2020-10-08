import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';


const routes: Routes = [
    { //para acessar essas rotas preciso acessar a rota Pai que será a rota raiz.
        path: '', //inserir uma String vazia pois essa rota vai ser dependente de uma rota que vou definir no "pai"
        component: HomeComponent,
        canActivate: [ AuthGuard ],
        children: [ 
            {
                // o filho tem a rota em branco
                path: '',
                component: SigninComponent
            },
            {
                path: 'signup',
                component: SignUpComponent
            }
         ]
    }
 ];

@NgModule({
    imports: [ RouterModule.forChild(routes)], // todo modulo carregad preguiçosamente é necessario carregar como forChild.
    exports: [ RouterModule ]
})
export class HomeRoutingModule{}