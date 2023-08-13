export interface MenuItem {
  description: string;
  img: string;
  price: number;
  title: string;
}

export interface MenuData {
  pizza: [MenuItem];
  drinks: [MenuItem];
}
