import { Component, OnInit, Inject,EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {
  imgUrl: String
  onConfirm = new EventEmitter()
  onDecline = new EventEmitter()
  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.imgUrl=data.image
    }

  ngOnInit(): void {
  }

  confirmClicked(flag:boolean){
    if(flag){
      this.onConfirm.emit();
    }
    else{
      this.onDecline.emit();
    }
  }
}
