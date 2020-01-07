import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ArtixHomeComponent } from "./artix-home/artix-home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import {
  MatButtonToggleModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule
} from "@angular/material";
import {
  OpportunitiesComponent,
  PopupDialog
} from "./opportunities/opportunities.component";
import { FooterComponent } from "./footer/footer.component";
import { DeersvgComponent, Cube } from "./deersvg/deersvg.component";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from "@angular/forms";
import { AngularTiltModule } from "angular-tilt";
import { CubeComponent } from './cube/cube.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtixHomeComponent,
    OpportunitiesComponent,
    FooterComponent,
    DeersvgComponent,
    PopupDialog,
    Cube,
    CubeComponent
  ],
  entryComponents: [PopupDialog, Cube],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularTiltModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
