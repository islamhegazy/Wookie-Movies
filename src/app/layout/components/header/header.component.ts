import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onSearch(e:any) {
    let searchValue = e.target.value;
      this.router.navigate(['pages/search'],{queryParams: { searchTxt: searchValue},})
   
  }
}
