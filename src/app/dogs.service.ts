import { Injectable } from '@angular/core';

import dogdata from "./dogdata.json";

export class Dog {
  public id : String;
  public name : String;
  public thumbnail : String;
  public likes: number = 0;

  constructor(id: String, name: String, thumbnail: String) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
  }

  like() {
    this.likes += 1;
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
