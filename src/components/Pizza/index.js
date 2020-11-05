import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  PizzaContainer,
  PizzaContent,
  PizzaItems,
  PizzaH1,
  PizzaP,
  PizzaBtn
} from './PizzaElements';

const Pizza = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PizzaContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <PizzaContent>
        <PizzaItems>
          <PizzaH1>Greatest Pizza Ever</PizzaH1>
          <PizzaP>Ready in 60 seconds</PizzaP>
          <PizzaBtn>Place Order</PizzaBtn>
        </PizzaItems>
      </PizzaContent>
    </PizzaContainer>
  );
};

export default Pizza;
