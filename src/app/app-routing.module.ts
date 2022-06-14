import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home';
import { LevelsComponent } from './levels';
import { SandboxComponent } from './sandbox';

const routes: Routes = [
    // { path: '', component: HomeComponent },
    { path: 'levels', component: LevelsComponent },
    { path: 'sandbox', component: SandboxComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);