import { Component } from '@angular/core';

@Component(
    {
        selector: "app-student",
        templateUrl: './student.component.html',
        styleUrls: ['./student.component.css'],
    }
)
export class StudentComponent{
    name: string = "Natalie";
    age:number= 28;
    score: number=98;

    GetBirthday(){
        return new Date().getFullYear() - this.age;
    }
}