import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  
  @Output('ChangeIncome')
  changeIncome: EventEmitter<string> = new EventEmitter<string>();
  
  @Output()
  buyingType:EventEmitter<string> = new EventEmitter<string>();
 
  @Output()
  manufacturer:EventEmitter<string> = new EventEmitter<string>();
  
  income:string[] = ["Household Income", "Industry Income", "Commercial Income"];
  selectedIncome:string = this.income[0];

  // this.changeIncome.emit(this.selectedIncome);

  purchasedItems:string[] = ["Buying Households", "Buying Appliances"];
  selectedPurchased:string = this.purchasedItems[0];

  Manufacturers:string[] = ["4 PG manufacturer", "2 PG manufacturer"];
  selectedManufacturer:string = this.Manufacturers[0];

  


  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.changeIncome.emit(this.selectedIncome);
    this.buyingType.emit(this.selectedPurchased);
    this.manufacturer.emit(this.selectedManufacturer);
  }

}
