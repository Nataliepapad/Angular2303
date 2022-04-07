import { Component, OnInit } from '@angular/core';
import { Trainer } from './trainer';
import { trainers } from './trainerMockupData'

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  Trainers: Trainer[] = trainers;

  constructor() { }

  ngOnInit(): void {
  }

}