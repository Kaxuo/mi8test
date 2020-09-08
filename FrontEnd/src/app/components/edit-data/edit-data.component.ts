import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/Models/Data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MongoDBService } from 'src/app/services/mongo-db.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss'],
})
export class EditDataComponent implements OnInit {
  form: FormGroup;
  single: Data;
  loading:boolean = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mongo: MongoDBService
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.mongo
      .getSingleData(this.route.snapshot.params.id).pipe(
        catchError(error => {
          this.router.navigate(['404'])
          return throwError(error)
        })
      )
      .subscribe((data: Data) => {
        this.single = data;
        console.log(this.single);
        this.form = new FormGroup({
          description: new FormControl(this.single.description,[
            Validators.required,
            Validators.minLength(5),
          ]),
          completed: new FormControl(this.single.completed),
          properties: new FormGroup({
            name: new FormControl(this.single.properties.name, [
              Validators.required,
              Validators.minLength(2),
            ]),
            age: new FormControl(this.single.properties.age, [
              Validators.required,
              Validators.pattern('^[0-9]{1,2}'),
            ]),
          }),
        })
        this.loading = false;
      });
  }

  sendData(values) {
    this.mongo.editData(this.route.snapshot.params.id, values).pipe(
      catchError(err => {
        this.router.navigate(['down'])
        return throwError(err)
      })
    )
    .subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
