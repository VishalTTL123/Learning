import { AfterContentInit, Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements AfterContentInit {
@Input() AlertMessage:any;
alertmode:any= "testing";
@ContentChild('head') contentheader?: ElementRef;
ngOnInit(){
  console.log(this.AlertMessage);
}

ngAfterContentInit(){
  console.log("this.contentheader",this.contentheader);
  if(this.contentheader?.nativeElement){
    this.contentheader.nativeElement.setAttribute("style","color:red");
  }
  
}

feature(){
  alert("checking");
}

}
