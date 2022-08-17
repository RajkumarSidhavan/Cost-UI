import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'

import { CostService } from "src/app/services/cost.service";
import { Cost, item } from "../../models/cost";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
}) 
export class CostComponent implements OnInit {

  itemlist !: item[];
  costmodel!: Cost;
  itemcode !: string;

  public displayedColumnsVendors = ['allocation_type', 'amount', 'user_id'];
  public displayedColumnsItem = ['deal_type', 'deal_amount', 'deal_amount_type','invoice_code'];

  public dataSourceVendor = new MatTableDataSource<any>();
  public dataSourceItem = new MatTableDataSource<any>();

  constructor(private readonly formBuilder: FormBuilder, private costService: CostService) {
    
  }

  cost = this.formBuilder.group({
    byggroup: ["", [Validators.maxLength(20)]],
    vendor: ["", [Validators.maxLength(100)]],
    itemcode: ["", [Validators.required, Validators.maxLength(20)]],
    startdate: ["", [Validators.maxLength(30)]],
    enddate: ["", [Validators.maxLength(30)]],
    listcost: ["", [Validators.maxLength(30)]]


    //email: ["", [
    //  Validators.required,
    //  Validators.maxLength(50),
    //  Validators.email
    //  //Validators.pattern('')
    //]],
    //troubleflag: [false],
    //coveragetype: [""],
    //phoneNumber: ["", [Validators.required, Validators.maxLength(12)]],
    //memberId: ["", [Validators.maxLength(16)]],
    //groupId: ["", [Validators.maxLength(6)]],
    //usercomments: ["", [Validators.maxLength(100)]],
    //relationship: ["", [Validators.maxLength(50)]]
  });

  myClickFunction() {
    console.log("Clicked");
    this.itemcode = this.cost.controls["itemcode"].value;
    this.getallcostinfo(this.itemcode);
  }

  async getallcostinfo(itemcode : any) {
    this.costService.getAllCostInfo(itemcode).subscribe((res) => {     

      this.costmodel = res;      
      
      console.log(this.costmodel);
          
      this.cost.controls["itemcode"].setValue(this.costmodel.item[0].item_code);
      this.cost.controls["startdate"].setValue(this.costmodel.item[0].start_date);
      this.cost.controls["enddate"].setValue(this.costmodel.item[0].end_date);
      this.cost.controls["listcost"].setValue(this.costmodel.item[0].list_cost);

      this.dataSourceVendor.data = this.costmodel.vendorAllowances;
      this.dataSourceItem.data = this.costmodel.itemAllowances;


    });
  }


  ngOnInit(): void {
  }

}
