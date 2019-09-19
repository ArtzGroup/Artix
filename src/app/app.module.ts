import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ArtixHomeComponent } from "./artix-home/artix-home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule, MatIconModule } from "@angular/material";
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { FooterComponent } from './footer/footer.component';
import { DeersvgComponent } from './deersvg/deersvg.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ArtixHomeComponent, OpportunitiesComponent, FooterComponent, DeersvgComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
