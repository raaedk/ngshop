import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dog } from "../dogs.service"

import { DogListComponent } from './dog-list.component';

describe('DogListComponent', () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;
  let htmlElement: any;

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
    htmlElement = fixture.nativeElement;
  });

  describe('DogListComponent (js)', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('gets all dogs', () => {
      let dogs : Dog[] = component.getAll();
  
      expect(dogs).toBeDefined();
    });
  
    it('get one dog', () => {
      let dog : Dog = component.dogs[0];
  
      expect(dog.id).toBeDefined();
    });
  });

  describe('DogListComponent (html)', () => {
    it('should render', () => {
      let deck = htmlElement.querySelector('.card-columns');
      expect(deck).toBeDefined();
      let card = htmlElement.querySelector('.card');
      expect(card).toBeDefined();    
    });
  });
});