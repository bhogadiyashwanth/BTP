import { Component,OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Services } from './services';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data=[]
  file;
  imagePath;
  imgURL;
  upImgFlag:boolean=false;
  title = 'cc-angular-frontend'; 
  constructor(private services:Services,public dialog: MatDialog){
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width:"500px",
      data:{image: this.imgURL}
    });
    dialogRef.componentInstance.onConfirm.subscribe(()=>{
      dialogRef.close();
      this.upImgFlag=true;
    })
    dialogRef.componentInstance.onDecline.subscribe(()=>{
      dialogRef.close();
      this.upImgFlag=false;
      this.imgURL=null;
      this.file=null
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  ngOnInit(){
   this.getBookDetails();
  }

  getBookDetails(){
    this.services.getBooks().subscribe(res=>{
      this.data=res
    })
  }

  sendBook(bookname,authorName,ratings){
    const request={title:bookname,author:authorName,rating:ratings}  
    this.services.addBooks(request).subscribe(res=>{
      this.getBookDetails();
    })
  }
  deleteBook(id){
    this.services.deleteBooks(id).subscribe(res=>{
      this.getBookDetails();
    })
  }
  onFileChanged(event) {
    this.file = event.target.files[0]
    var reader = new FileReader();
    this.imagePath = event.target.files;
    console.log(this.imagePath)
    reader.readAsDataURL(this.file); 
    event.target.value = '';
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      this.openDialog();
    }
  }

  again(){
    this.imgURL=null
    this.upImgFlag=false
  }
}
