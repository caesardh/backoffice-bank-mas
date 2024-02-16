import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AgentComponent } from "./pages/agent/agent.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
    {
        path: '',
        component: SideNavComponent,
        canActivate: [AuthGuard.authGuardFn],
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'agent', component: AgentComponent }
        ]
    },
    { path: 'login', component: LoginComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}