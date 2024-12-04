import { Routes } from '@angular/router';
import { PlayerInterfaceComponent } from './components/player-interface/player-interface.component';
import { GameMasterDashboardComponent } from './components/game-master-dashboard/game-master-dashboard.component';
import { SessionConfigComponent } from './components/session-config/session-config.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: GameMasterDashboardComponent },
    { path: 'session-config', component: SessionConfigComponent },
    { path: 'player', component: PlayerInterfaceComponent },
];
