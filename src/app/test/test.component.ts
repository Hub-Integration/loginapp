import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
interface DataResponse {
  id: number,
  title: string,
  body: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  posts;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<DataResponse>('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        this.posts = data;

        console.log('User ID:', data.id);
        console.log('User Title:', data.title);
        console.log('User body:', data.body);

      },
        (err: HttpErrorResponse) => {

          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        })

    this.http.post('http://jsonplaceholder.typicode.com/posts', {
      id: 999,
      title: 'dfoo',
      body: 'dbar'

    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );

  }
}
