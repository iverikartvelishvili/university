import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qveynebi';
  arr:any [] = []
  changed:boolean = false
  constructor(private http:HttpClient){

  }
  getSelected(event:any){
      this.http.get("http://universities.hipolabs.com/search?country=" + event.value)
      .subscribe((data:any) =>{
        this.arr = data
        console.log(this.arr)
        this.changed = true
        
      })
  }
 

  
}
