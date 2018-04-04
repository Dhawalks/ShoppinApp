import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecepiesComponent } from "./recepies/recepies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecepieStartComponent } from "./recepies/recepie-start/recepie-start.component";
import { RecepieDetailsComponent } from "./recepies/recepie-details/recepie-details.component";
import { RecepieEditComponent } from "./recepies/recepie-edit/recepie-edit.component";

const appRoutes:Routes=[
    {path: '', redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes', component:RecepiesComponent, children:[
        {path:'', component:RecepieStartComponent},
        {path: 'edit', component:RecepieEditComponent},
        {path:':id', component:RecepieDetailsComponent},
        {path: ':id/edit', component:RecepieEditComponent}
    ]},
    {path:'shopping_list', component:ShoppingListComponent}
  ];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}