import { TestBed } from '@angular/core/testing';

import dogdata from "./dogdata.json";

import { DogsService, Dog } from './dogs.service';

describe('DogsService', () => {
  const dogId = '4ziNJuYbfDius';
  const dogName = "relaxed bull dog GIF";

  let service: DogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('the json file is imported', () => {
    expect(dogdata).toBeDefined();
  });

  it('testing the all method', () => {
    let dogs : Dog[] = service.all();

    expect(dogs).toBeDefined();
    expect(dogs[0].name).toEqual(dogName);
  })

  // it('testing the get method', () => {
  //   let dog : Dog = service.get(dogId);

  //   expect(dogdata).toBeDefined();
  //   expect(dog.name).toEqual(dogMessage);
  // });
});
