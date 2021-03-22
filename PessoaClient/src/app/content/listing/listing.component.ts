import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  listItems: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  constructor() { }

  ngOnInit() {
  }

}
