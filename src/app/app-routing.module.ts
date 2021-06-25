import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SzamoloComponent } from './szamolo/szamolo.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { EredmenyekComponent } from './eredmenyek/eredmenyek.component';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { SorterComponent } from './sorter/sorter.component';
import { AkasztofaComponent } from './akasztofa/akasztofa.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'fooldal', component: FooldalComponent },
  { path: 'szamologep', component: SzamoloComponent },
  { path: 'eredmenyek', component: EredmenyekComponent },
  { path: '', component: BejelentkezesComponent },
  { path: 'sorter', component: SorterComponent },
  { path: 'akasztofa', component: AkasztofaComponent },
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
