import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppMainComponent) { }

    ngOnInit() {
        const usuario = JSON.parse(window.localStorage.getItem('usuario'));
        console.log(usuario.length)
        if (usuario.length - 1 > 0) {
            switch (usuario[1].COD_ROL) {
                case "EST":
                    this.model = [
                        { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/edutic'] },
                        { label: 'Calificaciones', icon: 'pi pi-fw pi-check-square', routerLink: ['/edutic/estudiante/calificaciones'] },
                        { label: 'Tareas', icon: 'pi pi-fw pi-caret-right', routerLink: ['/edutic/estudiante/tareas'] },
                    ]
                    break;
                case "ADM":
                    this.model = [
                        { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/edutic'] },
                        { label: 'Sedes', icon: 'pi pi-fw pi-check-square', routerLink: ['/edutic/infraestructura/sedes'] },
                        { label: 'Edificios', icon: 'pi pi-fw pi-caret-right', routerLink: ['/edutic/infraestructura/edificios'] },
                        { label: 'Aulas', icon: 'pi pi-fw  pi-list', routerLink: ['/edutic/infraestructura/aulas'] }
                    ]
                    break;
                case "PRO":
                    this.model = [
                        { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/edutic'] },
                        { label: 'Ingreso Notas', icon: 'pi pi-fw pi-check-square', routerLink: ['/edutic/docente/calificaciones'] },
                        { label: 'Ingreso Asistencia', icon: 'pi pi-fw pi-caret-right', routerLink: ['/edutic/docente/asistencias'] },
                        { label: 'Registro Deberes', icon: 'pi pi-fw  pi-list', routerLink: ['/edutic/docente/tareas'] }
                    ]
                    break;
                default:
            }
        }
        else {
            switch (usuario[0].COD_ROL) {
                case "EST":
                    this.model = [
                        { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/edutic'] },
                        { label: 'Calificaciones', icon: 'pi pi-fw pi-check-square', routerLink: ['/edutic/estudiante/calificaciones'] },
                        { label: 'Tareas', icon: 'pi pi-fw pi-caret-right', routerLink: ['/edutic/estudiante/tareas'] },
                    ]
                    break;
                case "ADM":
                    this.model = [
                        { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/edutic'] },
                        { label: 'Sedes', icon: 'pi pi-fw pi-check-square', routerLink: ['/edutic/infraestructura/sedes'] },
                        { label: 'Edificios', icon: 'pi pi-fw pi-caret-right', routerLink: ['/edutic/infraestructura/edificios'] },
                        { label: 'Aulas', icon: 'pi pi-fw  pi-list', routerLink: ['/edutic/infraestructura/aulas'] }
                    ]
                    break;
                case "PRO":
                    this.model = [
                        { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/edutic'] },
                        { label: 'Ingreso Notas', icon: 'pi pi-fw pi-check-square', routerLink: ['/edutic/docente/calificaciones'] },
                        { label: 'Ingreso Asistencia', icon: 'pi pi-fw pi-caret-right', routerLink: ['/edutic/docente/asistencias'] },
                        { label: 'Registro Deberes', icon: 'pi pi-fw  pi-list', routerLink: ['/edutic/docente/tareas'] }
                    ]
                    break;
                default:
            }
        }








        // {
        //     label: 'Profesor', icon: 'pi pi-fw pi-star', routerLink: ['/edutic'],
        //     items: [
        //         { label: 'Docente', icon: 'pi pi-fw pi-th-large', routerLink: ['/docente/calificaciones']},
        //                 { label: 'Forms', icon: 'pi pi-fw pi-file', routerLink: ['/components/forms'] },
        //                 { label: 'Data', icon: 'pi pi-fw pi-table', routerLink: ['/components/data'] },
        //                 { label: 'Panels', icon: 'pi pi-fw pi-list', routerLink: ['/components/panels'] },
        //                 { label: 'Overlays', icon: 'pi pi-fw pi-clone', routerLink: ['/components/overlays'] },
        //         { label: 'Menus', icon: 'pi pi-fw pi-plus', routerLink: ['/components/menus'] },
        //         { label: 'Messages', icon: 'pi pi-fw pi-envelope', routerLink: ['/components/messages'] },
        //         { label: 'Charts', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/components/charts'] },
        //         { label: 'File', icon: 'pi pi-fw pi-upload', routerLink: ['/components/file'] },
        //         { label: 'Misc', icon: 'pi pi-fw pi-spinner', routerLink: ['/components/misc'] }
        //     ]
        // },
        // {
        //     label: 'Pages', icon: 'pi pi-fw pi-copy', routerLink: ['/pages'],
        //     items: [
        //         { label: 'Empty', icon: 'pi pi-fw pi-clone', routerLink: ['/pages/empty'] },
        //         { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'], target: '_blank' },
        //         { label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
        //         { label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/error'], target: '_blank' },
        //         { label: '404', icon: 'pi pi-fw pi-times', routerLink: ['/404'], target: '_blank' },
        //         {
        //             label: 'Access Denied', icon: 'pi pi-fw pi-ban',
        //             routerLink: ['/accessdenied'], target: '_blank'
        //         }
        //     ]
        // },
        // {
        //     label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
        //     items: [
        //         {
        //             label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
        //             items: [
        //                 {
        //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
        //                     items: [
        //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
        //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
        //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
        //                     ]
        //                 },
        //                 {
        //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
        //                     items: [
        //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' }
        //                     ]
        //                 },
        //             ]
        //         },
        //         {
        //             label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
        //             items: [
        //                 {
        //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
        //                     items: [
        //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
        //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
        //                     ]
        //                 },
        //                 {
        //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
        //                     items: [
        //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
        //                     ]
        //                 },
        //             ]
        //         }
        //     ]
        // },
        // {
        //     label: 'Documentation', icon: 'pi pi-fw pi-file', routerLink: ['/documentation']
        // },
        // {
        //     label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', url: ['https://www.primefaces.org/store']
        // }

    }
}
