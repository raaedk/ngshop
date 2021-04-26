import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';

// import {TestBed, fakeAsync, tick} from '@angular/core/testing';
// import {RouterTestingModule} from "@angular/router/testing";
// import { DogListComponent } from '../dog-list/dog-list.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let htmlElement: any;
  let router : Router;
  let location : Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
    })
    .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have buttons for home and favorites', () => {
    const homeButton = htmlElement.querySelector('#home');
    const favButton = htmlElement.querySelector('#fav');

    expect(homeButton).not.toBeNull();
    expect(favButton).not.toBeNull();
  });
});
