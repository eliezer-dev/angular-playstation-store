import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	gamesList:any[] = data

  constructor() { }

  ngOnInit(): void {
		console.log(this.gamesList[0])

		console.log(this.gamesList[1])
  }

}
