import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WebsiteDetailsComponent } from './pages/website-details/website-details.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { AccountWebsitesComponent } from './pages/account-websites/account-websites.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { WebsiteEditorComponent } from './pages/website-editor/website-editor.component';

export const routes: Routes = [
    
   
    { path: 'signin', component: SigninPageComponent },
    { path: 'account/settings', component: AccountSettingsComponent },
    { path: 'account/websites', component: AccountWebsitesComponent },
    // {
    //     path: 'account', component: PetIndexComponent, children: [
    //         { path: 'edit', component: PetEditComponent },
    //         { path: 'edit/:id', component: PetEditComponent, resolve: { pet: petResolver } }
    //     ]
    // },
    {
        path: 'editor/:name',
        component: WebsiteEditorComponent,
        canActivate: [authGuard],
        // resolve: { pet: petResolver }
    },
    {
        path: ':name/:route',
        component: WebsiteDetailsComponent,
        canActivate: [authGuard],
    },
    {
        path: ':name',
        component: WebsiteDetailsComponent,
        canActivate: [authGuard],
    },
    {
        path: '',
        component: HomePageComponent,
    },


];
