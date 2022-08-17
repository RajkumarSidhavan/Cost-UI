export class Cost {
  item: Array<item> = [];
  vendorAllowances: Array<vendorAllowances> = [];
  itemAllowances: Array<itemAllowances> = [];
}



export class item {
  item_code!: string;
  warehouse_number!: string;
  vendor_number!: string;
  division!: string;
  start_date!: string;
  end_date!: string;
  list_cost!: string;
  list_cost_type!: string;
  effecitve_date!: string;
  item_cost_flag!: string;
}

export class vendorAllowances {
    allocation_type!: string;
    amount!: string;
    user_id !: string;
}


export class itemAllowances {
   deal_type!: string;
   deal_amount!: string;
   deal_amount_type!: string;
   invoice_code!: string;
}


//{
//  "item": [
//    {
//      "item_code": "1000",
//      "warehouse_number": "100",
//      "vendor_number": "1101",
//      "division": "123",
//      "start_date": "2022-04-29T20:00:32.53",
//      "end_date": "2022-04-29T20:00:32.53",
//      "list_cost": "1000.5000",
//      "list_cost_type": "Cash",
//      "effecitve_date": "2022-04-29T00:00:00",
//      "item_cost_flag": "A"
//    }
//  ],
//    "vendorAllowances": [
//      {
//        "allocation_type": "ABC",
//        "amount": "1548.50",
//        "user_id": "U001"
//      }
//    ],
//      "itemAllowances": [
//        {
//          "deal_type": "Bank",
//          "deal_amount": "1254.500",
//          "deal_amount_type": "Cash",
//          "invoice_code": "P1"
//        }
//      ]
//}
