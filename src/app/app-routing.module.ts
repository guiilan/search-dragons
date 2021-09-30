import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonslistComponent } from './pages/dragonslist/dragonslist.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterdragonComponent } from './pages/registerdragon/registerdragon.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dragons', component: DragonslistComponent},
  { path: 'registerdragons', component: RegisterdragonComponent},
  { path: 'editDragons/:id', component: RegisterdragonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }