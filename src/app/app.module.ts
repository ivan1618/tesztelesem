import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SzamoloComponent } from './szamolo/szamolo.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { EredmenyekComponent } from './eredmenyek/eredmenyek.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { MatSliderModule } from '@angular/material/slider';
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LyHammerGestureConfig,
} from '@alyle/ui';

import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { SorterComponent } from './sorter/sorter.component';
import { AkasztofaComponent } from './akasztofa/akasztofa.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SzamoloComponent,
    FooldalComponent,
    EredmenyekComponent,
    BejelentkezesComponent,
    SorterComponent,
    AkasztofaComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    LyButtonModule,
    LyToolbarModule,
    LyImageCropperModule,
    HammerModule,
    MatSliderModule,
  ],
  providers: [
    [LyTheme2],
    [StyleRenderer],

    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
