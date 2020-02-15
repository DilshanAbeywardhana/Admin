import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
// import { AngularFireModule } from "@angular/fire";
// import { AngularFirestoreModule } from "@angular/fire/firestore"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        // AngularFireModule.initializeApp(environment.firebaseConfig),
        // AngularFirestoreModule,
        ReactiveFormsModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
