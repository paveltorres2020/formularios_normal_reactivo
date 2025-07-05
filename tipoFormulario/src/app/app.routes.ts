import { Routes } from '@angular/router';
import { FormularioNormal} from './formulario-normal/formulario-normal';
import { FormularioReactivo} from './formulario-reactivo/formulario-reactivo';

export const routes: Routes = [
  { path: '', redirectTo: 'formulario-normal', pathMatch: 'full' },
  { path: 'formulario-normal', component: FormularioNormal },
  { path: 'formulario-reactivo', component: FormularioReactivo },
];