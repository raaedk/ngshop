import { TestBed, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';

import { DogListComponent } from "./dog-list/dog-list.component";


let app: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let router: Router;
let location: Location;
let HTMLelement: any;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, AppRoutingModule,
      ],
      declarations: [
        AppComponent, DogListComponent, FavoriteListComponent,
      ],
    }).compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.autoDetectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'ngshop'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('The Bulldog Shop');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to The Bulldog Shop!');
  // });

  it('should navigate to /home', fakeAsync( ()=> {
    router.navigate(['home']);
    tick();
    expect(location.path()).toBe('');
  }));

});
