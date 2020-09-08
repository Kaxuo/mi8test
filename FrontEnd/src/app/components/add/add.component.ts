import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MongoDBService } from 'src/app/services/mongo-db.service';
import { Info } from 'src/app/Models/Data';
import { Router } from '@angular/router';
import { take,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form: FormGroup;

  constructor(private mongo: MongoDBService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      completed: new FormControl(false),
      properties: new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        age: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{1,2}'),
        ]),
      }),
    });
  }

  sendData(values: Info) {
    this.mongo
      .postData(values)
      .pipe(
        catchError((err) => {
          this.router.navigate(['down'])
          return throwError(err);
        }),
        take(1)
      )
      .subscribe((response: Info) => {
        console.log(response);
        this.router.navigate(['/']);
      });
  }
}
