import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./authentication/guards/auth.guard";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    },
    {
        path: 'hdi',
        loadChildren: () => import('./views/views.module').then(m => m.ViewsModule),
        canLoad: [ AuthGuard ]
    },
    {​​​​ 
        path: 'auth', 
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
    }​​​​,
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'corrected', useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule{}