'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid"; 

interface BasketItem {
  id: number;
  name: string;
  price: string;
  image: string;
  uniqueId: string; 
}

interface BasketContextType {
  items: BasketItem[];
  addToCart: (item: Omit<BasketItem, "uniqueId">) => void;
  removeFromCart: (uniqueId: string) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function BasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BasketItem[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("basket");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Omit<BasketItem, "uniqueId">) => {
    setItems(prev => [...prev, { ...item, uniqueId: uuidv4() }]);
  };

  const removeFromCart = (uniqueId: string) => {
    setItems(prev => prev.filter(item => item.uniqueId !== uniqueId));
  };

  return (
    <BasketContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);
  if (!context) throw new Error("useBasket must be used within a BasketProvider");
  return context;
}
