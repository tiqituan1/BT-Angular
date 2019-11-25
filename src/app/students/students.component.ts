import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  formStudent = {
    id: 0,
    fullName: '',
    birthday: new Date().toISOString().substring(0, 10),
    mark: 0,
  };
  students: Student[] = [
    {
      id: 1,
      fullName: 'Tuấn Trần',
      birthday: new Date(1999, 1, 29),
      mark: 9
    },
    {
      id: 2,
      fullName:'Trần Tuấn',
      birthday: new Date(1999, 2, 28),
      mark: 8
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
