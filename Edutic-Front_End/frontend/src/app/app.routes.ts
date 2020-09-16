import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';
import { SedesComponent } from './user-administrativo/infraestructura/sedes/sedes.component';
import { EdificiosComponent } from './user-administrativo/infraestructura/edificios/edificios.component';
import { AulasComponent } from './user-administrativo/infraestructura/aulas/aulas.component';
import { ProductoComponent } from './producto/producto.component';
import { CalificacionesComponent } from './componentes/docente/calificaciones/calificaciones.component';
import { AsistenciasComponent } from './componentes/docente/asistencias/asistencias.component';
import { TareasComponent } from './componentes/docente/tareas/tareas.component';
import { CalificacionesEstudianteComponent } from './componentes/estudiante/calificaciones/calificacionesEstudiante.component';
import { TareaEstudianteComponent } from './componentes/estudiante/tarea-estudiante/tarea-estudiante.component';

export const routes: Routes = [
    { path: '', component: AppLoginComponent,},
    { path: 'edutic', component: AppMainComponent,
        children: [
            { path: '', component: DashboardDemoComponent },
            { path: 'components/sample', component: SampleDemoComponent },
            { path: 'components/forms', component: FormsDemoComponent },
            { path: 'components/data', component: DataDemoComponent },
            { path: 'components/panels', component: PanelsDemoComponent },
            { path: 'components/overlays', component: OverlaysDemoComponent },
            { path: 'components/menus', component: MenusDemoComponent },
            { path: 'components/messages', component: MessagesDemoComponent },
            { path: 'components/misc', component: MiscDemoComponent },
            { path: 'pages/empty', component: EmptyDemoComponent },
            { path: 'components/charts', component: ChartsDemoComponent },
            { path: 'components/file', component: FileDemoComponent },
            { path: 'documentation', component: DocumentationComponent },
            { path: 'infraestructura/sedes',component: SedesComponent},
            { path: 'infraestructura/edificios',component: EdificiosComponent},
            { path: 'infraestructura/aulas',component: AulasComponent},
            { path: 'producto',component: ProductoComponent},
            { path: 'docente/calificaciones',component: CalificacionesComponent},
            { path: 'docente/asistencias',component: AsistenciasComponent},
            { path: 'docente/tareas',component:TareasComponent },
            { path: 'estudiante/calificaciones',component:CalificacionesEstudianteComponent },
            { path: 'estudiante/tareas',component:TareaEstudianteComponent }
        ],
    },
    {path: 'error', component: AppErrorComponent},
    {path: 'accessdenied', component: AppAccessdeniedComponent},
    {path: 'notfound', component: AppNotfoundComponent},
    //{path: 'login', component: AppLoginComponent},
    {path: '**', redirectTo: '/notfound'}

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
