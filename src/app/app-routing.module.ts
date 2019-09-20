import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtixHomeComponent } from "./artix-home/artix-home.component";
import { OpportunitiesComponent } from "./opportunities/opportunities.component";

const routes: Routes = [
  { path: "", component: ArtixHomeComponent },
  { path: "artixhome", component: ArtixHomeComponent },
  { path: "opportunities", component: OpportunitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
