export interface Product {
    id: number;
    product_name: string;
    product_price: number;
    stock: number;
    discount?: number;
    brand: string;
    main_img: string;
  }