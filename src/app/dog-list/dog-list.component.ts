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

  constructor(private dogService : DogsService) {}

  ngOnInit(): void {

  }

  getAll() : Dog[] {
    return this.dogService.all();
  }
}
