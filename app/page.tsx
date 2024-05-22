"use client"

import Nav from "./componants/Nav";
import Header from "./componants/Header";
import ListPizza from "./componants/ListPizza";
import Footer from "./componants/Footer";
import { useState, useEffect } from "react";
import { Pizza } from "./Types/types";
import { db } from "./db/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (pizza: Pizza) => {
    // Mettre à jour la quantité dans le panier
    setCartQuantity(cartQuantity + 1);
    // Autres logiques pour ajouter l'article au panier
  };

  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pizzaCollection = collection(db, 'pizza');
      const pizzaSnapshot = await getDocs(pizzaCollection);
      const pizzaData = pizzaSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Pizza[];
      setPizzas(pizzaData);
    };

    fetchData();
  }, []);

  return (
   <>
      <Nav cartQuantity={cartQuantity} />
      <Header/>
      <ListPizza pizzas={pizzas} addToCart={addToCart}/>
      <ToastContainer />
      <Footer />
   </>
  );
}