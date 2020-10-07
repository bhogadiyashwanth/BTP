import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
@Input() book;
@Output() deleteBook= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteClicked(id){
      this.deleteBook.emit(id);
  }

}
