import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dog } from '../dogs.service';

import { FavoriteListComponent } from './favorite-list.component';

describe('FavoriteListComponent', () => {
  let component: FavoriteListComponent;
  let fixture: ComponentFixture<FavoriteListComponent>;

  const dogId = '4ziNJuYbfDius'

  localStorage.clear();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("the list is about to get a dog", () => {
    let dog : Dog = component.get(dogId);

    expect(dog.id).toEqual(dogId)
  })

  it("the fav list stores all the dogs", () => {

    component.addFav(dogId);

    
  })
});
