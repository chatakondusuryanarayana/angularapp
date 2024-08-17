import { Component } from '@angular/core';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrl: './placement.component.css'
})
export class PlacementComponent {
  saveForm(myform:any):void{
    console.log(myform)
  }
}
