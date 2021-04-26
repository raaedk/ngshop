import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from "../dogs.service";

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
  providers: [ DogsService ]
})
export class DogListComponent implements OnInit {

  public dogs : Dog[];

  constructor(private dogService : DogsService) {
    this.dogs = this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() : Dog[] {
    return this.dogService.all();
  }

  addLike(dog : Dog) : void {
    dog.like();
  }

  addFav(id: string): void {
    let fav = JSON.parse(localStorage.getItem('favorites'));
    let favSet : Set<String>;

    if (fav) {
      favSet = new Set(fav);
      if (favSet.has(id)) {
        favSet.delete(id);
      }
      else {
        favSet.add(id);
      }
    }
    else {
      favSet = new Set();
      favSet.add(id);
    }

    // console.log(favSet);
    localStorage.setItem('favorites', JSON.stringify(Array.from(favSet)));
  }

  
}
