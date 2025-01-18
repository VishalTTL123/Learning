import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from "./alert/alert.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{

  searchvalue: any;
  
  @ViewChild('searchtext', {static: false}) staticName?: ElementRef | undefined;
  @ViewChild('inputtext', {static: false}) nonStaticName?: ElementRef | undefined;
  @ViewChild(AlertComponent) alertcomp? : AlertComponent;
  @ViewChildren('searchtext') AllChange? : QueryList<any>; 

 ngOnInit(){
  this.logValues('OnInit');
  // console.log(this.myValue);
 }

ngAfterViewInit(){
  this.new = this.staticName?.nativeElement.value;
  console.log("this.staticName",this.staticName);
  console.log("this.AllChange",this.AllChange);
  const childvalue = this.alertcomp?.AlertMessage;
  console.log("childvalue",childvalue);
  this.logValues('AfterViewInit');
 }

 logValues(eventType: string){
  console.log(`[${eventType}]\n staticName: ${this.staticName}, name value: "${this.staticName?.nativeElement.innerHTML}"\n nonStaticName: ${this.nonStaticName}, name value: "${this.nonStaticName?.nativeElement.innerHTML}"\n`);
}
 check(value: any){
  // alert(value);
  console.log("value",value);
 }

 new:any="";
 test(){
  console.log("his.staticName?.nativeElement.value;",this.staticName?.nativeElement.value);
  this.searchvalue=this.staticName?.nativeElement.value;
  // this.nonStaticName?.nativeElement.setvalue= this.searchvalue;
  if (this.AllChange?.first.nativeElement) {
    this.AllChange.first.nativeElement.style.background="yellow";
    this.AllChange.last.nativeElement.style.background="yellow";
    // this.AllChange.nativeElement.style.background = "red";
  }

  
  const childvalue = this.alertcomp?.alertmode;
  console.log("childvalue2",childvalue);

  this.alertcomp?.feature();

 }

}
