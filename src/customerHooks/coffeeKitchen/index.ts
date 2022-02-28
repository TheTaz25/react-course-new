import { useReducer } from "react";
import { Action, CoffeeKitchenIngredients, CoffeeKitchenReducerAction, CoffeeKitchenReturn, CoffeeKitchenState, CoffeeType } from "./interfaces";

const initialCoffeeKitchen: CoffeeKitchenState = {
  coffee: 200,
  milk: 500,
  oatMilk: 1000,
  sugar: 400,
  currentlyBrewing: undefined,
}

const calculateCurrentCoffeeType = (current: CoffeeType | undefined, actionType: Action): CoffeeType => {
  switch (current) {
    case 'Black':
      if (actionType === Action.ADD_OAT_MILK) return 'Hipster';
      if (actionType === Action.ADD_MILK) return 'Latte';
      if (actionType === Action.ADD_SUGAR) return 'Pumkin Spice Coffee';
      return current;
    case 'Latte':
    case 'Hipster':
      if (actionType === Action.ADD_SUGAR) return 'Pumkin Spice Coffee';
      return current;
    case 'Pumkin Spice Coffee':
      return current;
    case 'Childrens':
      if (actionType === Action.ADD_COFFEE) return 'Latte';
      if (actionType === Action.ADD_SUGAR) return 'Pumkin Spice Coffee';
      return 'Childrens';
    default:
      if (actionType === Action.ADD_OAT_MILK) return 'Hipster';
      if (actionType === Action.ADD_MILK) return 'Childrens';
      if (actionType === Action.ADD_SUGAR) return 'Pumkin Spice Coffee';
      return 'Black';
  }
};

const reducer = (state: CoffeeKitchenState, payload: CoffeeKitchenReducerAction): CoffeeKitchenState => {
  switch (payload.type) {
    case Action.ADD_COFFEE:
      return {
        ...state,
        coffee: state.coffee - payload.payload,
        currentlyBrewing: calculateCurrentCoffeeType(state.currentlyBrewing, payload.type),
      };
    case Action.ADD_MILK:
      return {
        ...state,
        milk: state.milk - payload.payload,
        currentlyBrewing: calculateCurrentCoffeeType(state.currentlyBrewing, payload.type),
      };
    case Action.ADD_OAT_MILK:
      return {
        ...state,
        oatMilk: state.oatMilk - payload.payload,
        currentlyBrewing: calculateCurrentCoffeeType(state.currentlyBrewing, payload.type),
      };
    case Action.ADD_SUGAR:
      return {
        ...state,
        sugar: state.sugar - payload.payload,
        currentlyBrewing: calculateCurrentCoffeeType(state.currentlyBrewing, payload.type),
      };
    case Action.RESET:
      return {
        ...payload.payload
      };
    case Action.BREW: 
      return {
        ...state,
        currentlyBrewing: undefined,
      };
    case Action.REFILL: {
      return {
        ...state,
        milk: state.milk + payload.payload.milk,
        oatMilk: state.oatMilk + payload.payload.oatMilk,
        sugar: state.sugar + payload.payload.sugar,
        coffee: state.coffee + payload.payload.coffee,
      }
    }
    default:
      return {
        ...state,
      };
  }
};



const useCoffeeKitchenHook = (): CoffeeKitchenReturn => {
  const [coffeeKitchen, dispatch] = useReducer(reducer, initialCoffeeKitchen);

  const brewCoffee = () => dispatch({
    type: Action.BREW, payload: undefined,
  });
  const addMilk = (value: number) => dispatch({
    type: Action.ADD_MILK, payload: value,
  });
  const addOatMilk = (value: number) => dispatch({
    type: Action.ADD_OAT_MILK, payload: value,
  });
  const addSugar = (value: number) => dispatch({
    type: Action.ADD_SUGAR, payload: value,
  });
  const addCoffee = (value: number) => dispatch({
    type: Action.ADD_COFFEE, payload: value,
  });
  const refillKitchen = (value: CoffeeKitchenIngredients) => dispatch({
    type: Action.REFILL, payload: value,
  });

  return [coffeeKitchen, {
    brewCoffee,
    addMilk,
    addOatMilk,
    addSugar,
    addCoffee,
    refillKitchen,
  }];
};

export default useCoffeeKitchenHook;
