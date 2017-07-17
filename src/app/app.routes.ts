import { Routes, RouterModule } from '@angular/router';

// Components
import {
 HomeComponent
} from './appcode/project.components';

const APP_ROUTES: Routes = [
   {
        path: 'home',
        component: HomeComponent
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, { useHash: false });

