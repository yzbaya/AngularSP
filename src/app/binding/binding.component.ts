import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
titre : String="demo du data binding Interpolation"
status : boolean = true;
constructor() { }

  ngOnInit(): void {
  }

}
