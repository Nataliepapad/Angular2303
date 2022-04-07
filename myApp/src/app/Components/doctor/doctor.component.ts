import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor';
import { doctors } from './doctorMockupData'

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  Doctors: Doctor[] = doctors;

  constructor() { }

  ngOnInit(): void {
  }

}
