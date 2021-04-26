import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dog } from "../dogs.service"

import { DogListComponent } from './dog-list.component';

describe('DogListComponent', () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;
  let htmlElement: any;

  const dogId = '4ziNJuYbfDius';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
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

    it(`should add to user's favorites when favorite button is pressed`, () => {
      localStorage.clear();

      component.addFav(dogId);
      let mySet : Set<string> = new Set(JSON.parse(localStorage.getItem('favorites')));
      expect(mySet.has(dogId)).toBeTruthy();
    });

    it('should increase likes by one when like function is called', () => {
      let testDog : Dog = component.dogs.find((dog) => dog.id == dogId);

      component.addLike(testDog);
      expect(testDog.likes).toEqual(1);
    });


  });

  describe('DogListComponent (html)', () => {
    it('should render', () => {
      let deck = htmlElement.querySelector('.card-columns');
      expect(deck).not.toBeNull();
      let card = htmlElement.querySelector('.card');
      expect(card).not.toBeNull();  
    });

    it('should render buttons for liking/favoriting cards', () => {
      let likeButton = htmlElement.querySelector('.like-button');
      let favButton = htmlElement.querySelector('.fav-button');

      expect(likeButton).not.toBeNull();
      expect(favButton).not.toBeNull();
    })

  });
});