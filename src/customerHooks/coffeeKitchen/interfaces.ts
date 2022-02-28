export type ReducerAction <A, P> = {
  type: A,
  payload: P
};

export type CoffeeType = "Black"
| "Latte"
| "Hipster"
| "Childrens"
| "Pumkin Spice Coffee";

export interface CoffeeKitchenIngredients {
  coffee: number,
  milk: number,
  oatMilk: number,
  sugar: number,
};

export interface CoffeeKitchenState extends CoffeeKitchenIngredients {
  currentlyBrewing?: CoffeeType
}

export enum Action {
  RESET, ADD_MILK, ADD_OAT_MILK, ADD_SUGAR, ADD_COFFEE, BREW, REFILL,
}

type ResetKitchenAction = ReducerAction<Action.RESET, CoffeeKitchenState>;
type AddMilkAction = ReducerAction<Action.ADD_MILK, number>;
type AddOatMilkAction = ReducerAction<Action.ADD_OAT_MILK, number>;
type AddSugarAction = ReducerAction<Action.ADD_SUGAR, number>;
type AddCoffeeAction = ReducerAction<Action.ADD_COFFEE, number>;
type BrewAction = ReducerAction<Action.BREW, undefined>;
type RefillAction = ReducerAction<Action.REFILL, CoffeeKitchenIngredients>;

export type CoffeeKitchenReducerAction =
| ResetKitchenAction
| AddMilkAction
| AddOatMilkAction
| AddSugarAction
| AddCoffeeAction
| BrewAction
| RefillAction;

interface CoffeeKitchenFunctions {
  brewCoffee: () => void,
  addMilk: (value: number) => void,
  addOatMilk: (value: number) => void,
  addSugar: (value: number) => void,
  addCoffee: (value: number) => void,
  refillKitchen: (value: CoffeeKitchenIngredients) => void,
}

export type CoffeeKitchenReturn = [CoffeeKitchenState, CoffeeKitchenFunctions];