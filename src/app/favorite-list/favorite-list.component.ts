import { Component, OnInit } from '@angular/core';

import { DogListComponent } from "../dog-list/dog-list.component";

import { Dog, DogsService } from "../dogs.service"

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css', '../dog-list/dog-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  public favDogs : Dog[] = [];

  constructor(private dogService : DogsService) {

    let dogs : string[] = JSON.parse(localStorage.getItem('favorites'))

    if (dogs) {
      dogs.forEach((item) => {
        this.favDogs.push(this.get(item));
      })
    }
    
  }

  ngOnInit(): void {
  }

  get(id: string): Dog {
    return this.dogService.get(id);
  }

  addLike(dog : Dog) : void {
    dog.like();
  }

  addFav(id: string): void {
    let fav = JSON.parse(localStorage.getItem('favorites'));
    let favSet : Set<String>;

    // if (fav) {
      favSet = new Set(fav);
      if (favSet.has(id)) {
        favSet.delete(id);
        this.favDogs = this.favDogs.filter((dog) => dog.id != id)
      }
      else {
        favSet.add(id);
      }

    localStorage.setItem('favorites', JSON.stringify(Array.from(favSet)));
  }

}
