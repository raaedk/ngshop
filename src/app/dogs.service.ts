import { Injectable } from '@angular/core';

import dogdata from "./dogdata.json";

export class Dog {
  public id : string;
  public name : string;
  public thumbnail : string;
  public likes: number = 0;

  constructor(id: string, name: string, thumbnail: string) {
    let likes = localStorage.getItem(id);

    if (likes) {
      this.likes = parseInt(likes);
    }

    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
  }

  like() {
    this.likes += 1;
    localStorage.setItem(this.id, this.likes.toString())
  }
}

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private dogData : Map<String, Dog> = new Map();

  constructor() {
    dogdata.forEach(dog => {
      let newDog = new Dog(dog.id, dog.name, dog.thumbnail);

      this.dogData.set(newDog.id, newDog);
    });
  }

  public all() : Dog[] {
    return Array.from(this.dogData.values());
  }

  public get(id: string) : Dog {
    //TODO(andrew): Add handling for invalid ids
    return this.dogData.get(id);
  }
}
