import { Component, OnInit } from '@angular/core';
import { Info } from '../../Models/Data';
import { MongoDBService } from '../../services/mongo-db.service';
import { map, catchError, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  dataSource: Info[];
  displayedColumns: string[] = ['position','description', 'name', 'importance','age','edit','delete'];
  dataId:string;
  loading:boolean = true

  constructor(private mongo: MongoDBService, private router: Router,) {}

  ngOnInit(): void {
    this.mongo
      .getData()
      .pipe(
        map((data) => {
          let bob = []
          Object.entries(data).map((key, value) => {
            bob.push({
              num:value+1,
              data:[key[1]]
            })
          });
          return bob
        }),
        catchError(err => {
          this.router.navigate(['down'])
          return throwError(err)
        }),
        take(1)
      )
      .subscribe((data:Info[]) => {
        console.log(data);
        this.dataSource = data
        this.loading = false
      });
  }

  delete(id){
    this.mongo.deleteData(id).pipe(
      catchError(err => {
        this.router.navigate(['down'])
        return throwError(err)
      }),
      take(1)
    ).subscribe(() => {
     console.log("Item Deleted")
     this.dataSource = this.dataSource.filter(val => val.data[0].id !== id)
     this.router.navigate(['/'])
    })
  }
}
