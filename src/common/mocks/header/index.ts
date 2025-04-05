import { ShoppingBasket,LogIn,MapPin } from 'lucide-react';
import { ReactNode, createElement } from "react";

export type HeaderComponent = {
  buttonSrc: ReactNode;
};

export const headerComponents: HeaderComponent[] = [
  {
   
    buttonSrc: createElement(MapPin),
  },
  {
    buttonSrc: createElement(ShoppingBasket), 
  },
  {
    buttonSrc: createElement(LogIn ),
  }
];
