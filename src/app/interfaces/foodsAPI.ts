export interface FoodResult {
    data: Food[];
  }
  
  /*interface Support {
    url: string;
    text: string;
  }*/
  
  export interface Food {
    id: number;
    name: string;
    price: string;
    type: string;
    avatar: string;
  }