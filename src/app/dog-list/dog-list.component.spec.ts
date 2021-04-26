import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dog } from "../dogs.service"

import { DogListComponent } from './dog-list.component';

describe('DogListComponent', () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('gets all dogs', () => {
    let dogs : Dog[] = component.getAll();

    expect(dogs).toBeDefined();
  })
});
