import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ColoniesComponent } from './dashboard/colonies/colonies.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FutureDatePipe } from './pipes/future-date.pipe'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { NewColonyComponent } from './new-colony/new-colony.component';
import { NewColonyFormComponent } from './new-colony/new-colony-form/new-colony-form.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { NewCollectionFormComponent } from './new-collection/new-collection-form/new-collection-form.component';
import { ColonyComponent } from './colony/colony.component';
import { CollectionsHistoryComponent } from './colony/collections-history/collections-history.component';
import { HivesComponent } from './hives/hives.component'
import { UpcomingCollectionsComponent } from './upcoming-collections/upcoming-collections.component';
import { NewHiveComponent } from './new-hive/new-hive.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'colonies', component: ColoniesComponent },
  { path: 'colonies/:id', component: ColonyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ColoniesComponent,
    NewColonyComponent,
    NewColonyFormComponent,
    FutureDatePipe,
    NewCollectionComponent,
    NewCollectionFormComponent,
    ColonyComponent,
    CollectionsHistoryComponent,
    HivesComponent,
    UpcomingCollectionsComponent,
    NewHiveComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
