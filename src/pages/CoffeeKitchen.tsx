import { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Button } from '@mui/material';
import useCoffeeKitchenHook from "../customerHooks/coffeeKitchen";
import { CoffeeKitchenIngredients, CoffeeType } from "../customerHooks/coffeeKitchen/interfaces";
import './coffeeKitchen.css';
import { styles } from "./styles";

const CoffeeKitchen: React.FC = () => {
  const [kitchen, kitchenActions] = useCoffeeKitchenHook();
  const classes = styles();
  const [coffeHistory, setCoffeHistory] = useState<Record<CoffeeType, number>>({
    "Pumkin Spice Coffee": 0,
    Black: 0,
    Childrens: 0,
    Hipster: 0,
    Latte: 0,
  });
  const [refill, setRefill] = useState<CoffeeKitchenIngredients>({
    sugar: 0,
    milk: 0,
    oatMilk: 0,
    coffee: 0,
  });

  const handleBrewClick = () => {
    if (kitchen.currentlyBrewing !== undefined) {
      setCoffeHistory((previous) => ({
        ...previous,
        [kitchen.currentlyBrewing!]: previous[kitchen.currentlyBrewing!] + 1,
      }));
      kitchenActions.brewCoffee();
    }
  };

  const handleRefillClick = () => {
    kitchenActions.refillKitchen(refill);
    setRefill({
      sugar: 0,
      milk: 0,
      oatMilk: 0,
      coffee: 0,
    });
  }
  
  return (
    <div>
      <h1>You are currently brewing: {kitchen.currentlyBrewing ?? 'nothing'}</h1>
      <div className="ingredients">
        <div>
          <h2>Coffee</h2>
          <div className="ingredient-amount">{kitchen.coffee} g</div>
          <Button sx={{
            my: 2,
          }} className={classes.button} variant="contained" size="large" color="success" onClick={() => kitchenActions.addCoffee(25)}>Add 25g</Button>
          <h2>Refill</h2>
          <input type="number" value={refill.coffee} onChange={(event) => setRefill((previous) => ({
            ...previous,
            coffee: Number(event.target.value),
          }))}/>
        </div>
        <div>
          <h2>Milk</h2>
          <div className="ingredient-amount">{kitchen.milk} ml</div>
          <Button variant="contained" size="large" color="success" onClick={() => kitchenActions.addMilk(50)}>Add 50ml</Button>
          <Button variant="contained" size="large" color="success" onClick={() => kitchenActions.addMilk(100)}>Add 100ml</Button>
          <h2>Refill</h2>
          <input type="number" value={refill.milk} onChange={(event) => setRefill((previous) => ({
            ...previous,
            milk: Number(event.target.value),
          }))}/>
        </div>
        <div>
          <h2>Oat Milk</h2>
          <div className="ingredient-amount">{kitchen.oatMilk} ml</div>
          <Button variant="contained" size="large" color="success" onClick={() => kitchenActions.addOatMilk(50)}>Add 50ml</Button>
          <Button variant="contained" size="large" color="success" onClick={() => kitchenActions.addOatMilk(100)}>Add 100ml</Button>
          <h2>Refill</h2>
          <input type="number" value={refill.oatMilk} onChange={(event) => setRefill((previous) => ({
            ...previous,
            oatMilk: Number(event.target.value),
          }))}/>
        </div>
        <div>
          <h2>Sugar</h2>
          <div className="ingredient-amount">{kitchen.sugar} g</div>
          <Button variant="contained" size="large" color="success" onClick={() => kitchenActions.addSugar(10)}>Add 10g</Button>
          <Button variant="contained" size="large" color="success" onClick={() => kitchenActions.addSugar(25)}>Add 25g</Button>
          <h2>Refill</h2>
          <input type="number" value={refill.sugar} onChange={(event) => setRefill((previous) => ({
            ...previous,
            sugar: Number(event.target.value),
          }))}/>
        </div>
      </div>
      <div>
        <Button variant="contained" size="large" color="success" onClick={handleBrewClick}>Brew</Button>
        <Button variant="contained" size="large" color="success" onClick={handleRefillClick}>Refill</Button>
      </div>
      <div style={{ height: '500px' }}>
        <ResponsiveBar
          data={Object.entries(coffeHistory).map(([id, value]) => ({ id, value }))}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          theme={{
            textColor: '#fff',
          }}
          enableLabel={false}
          axisLeft={{
            format: (val) => val - Math.floor(val) === 0 ? val : '', 
          }}
        />
      </div>
    </div>
  );
};

export default CoffeeKitchen;
