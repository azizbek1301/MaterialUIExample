import { Routes } from '@angular/router';
import { ButtonOverviewExample } from './button/button.component';
import { CheckboxOverviewExample } from './checkbox/checkbox.component';

export const routes: Routes = [
    {path :"buttons",component:ButtonOverviewExample},
    {path :"checkbox", component:CheckboxOverviewExample}
];
