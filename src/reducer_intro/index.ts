import { useReducer } from 'react';
import { Action, CoffeeKitchen, CoffeeKitchReducerAction, CoffeeTypes } from './models';

const calculateCurrentCoffeeType = (current: CoffeeTypes | undefined, actionType: Action): CoffeeTypes => {
  switch (current) {
    case 'Black':
      if (actionType === Action.ADD_OAT_MILK) return 'Hipster Oat';
      if (actionType === Action.ADD_MILK) return 'Latte';
      if (actionType === Action.ADD_SUGAR) return 'Pumpkin Spice Latte';
      return current;
    case 'Latte':
    case 'Hipster Oat':
      if (actionType === Action.ADD_SUGAR) return 'Pumpkin Spice Latte';
      return current;
    case 'Pumpkin Spice Latte':
      return current;
    case 'Childrens Coffee':
      if (actionType === Action.ADD_COFFEE) return 'Latte';
      if (actionType === Action.ADD_SUGAR) return 'Pumpkin Spice Latte';
      return 'Childrens Coffee';
    default:
      if (actionType === Action.ADD_OAT_MILK) return 'Hipster Oat';
      if (actionType === Action.ADD_MILK) return 'Childrens Coffee';
      if (actionType === Action.ADD_SUGAR) return 'Pumpkin Spice Latte';
      return 'Black';
  }
};

const reducer = (state: CoffeeKitchen, action: CoffeeKitchReducerAction): CoffeeKitchen => {
  switch (action.type) {
    case Action.RESET:
      return {
        ...action.payload,
      };
    case Action.ADD_COFFEE:
      return {
        ...state,
        coffee: state.coffee - action.payload,
        currentlyMaking: calculateCurrentCoffeeType(state.currentlyMaking, action.type),
      };
    case Action.ADD_MILK:
      return {
        ...state,
        milk: state.milk - action.payload,
        currentlyMaking: calculateCurrentCoffeeType(state.currentlyMaking, action.type),
      };
    case Action.ADD_OAT_MILK:
      return {
        ...state,
        oatMilk: state.oatMilk - action.payload,
        currentlyMaking: calculateCurrentCoffeeType(state.currentlyMaking, action.type),
      };
    case Action.ADD_SUGAR:
      return {
        ...state,
        sugar: state.sugar - action.payload,
        currentlyMaking: calculateCurrentCoffeeType(state.currentlyMaking, action.type),
      };
    case Action.BREW:
      return {
        ...state,
        currentlyMaking: undefined,
      };
    default:
      return {
        ...state,
      };
  }
};

const useCoffeeKitchen = (initialIngredients: CoffeeKitchen) => {
  const [coffeeKitchen, dispatch] = useReducer(reducer, initialIngredients);
  dispatch({ type: Action.RESET, payload: initialIngredients });

  const resetCoffeeKitchen = (kitchen: CoffeeKitchen) => dispatch({
    type: Action.RESET, payload: kitchen,
  });
  const addMilkToCoffee = (value: number) => dispatch({
    type: Action.ADD_MILK, payload: value,
  });
  const addOatMilkToCoffee = (value: number) => dispatch({
    type: Action.ADD_OAT_MILK, payload: value,
  });
  const addSugarToCoffee = (value: number) => dispatch({
    type: Action.ADD_SUGAR, payload: value,
  });
  const completeBrew = () => dispatch({
    type: Action.BREW, payload: undefined,
  });

  return [coffeeKitchen, {
    resetCoffeeKitchen,
    addMilkToCoffee,
    addOatMilkToCoffee,
    addSugarToCoffee,
    completeBrew,
  }];
};

export default useCoffeeKitchen;
