import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

  public getCatName() {
    const catNameParam = this.route.snapshot.paramMap.get('name');
    if (catNameParam != null)
      return catNameParam;
    else return "nameless stray cat";
  }


}
