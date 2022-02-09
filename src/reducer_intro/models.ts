type ReducerAction <A, P> = {
  type: A,
  payload: P
};

export type CoffeeTypes = 'Latte' | 'Black' | 'Hipster Oat' | 'Pumpkin Spice Latte' | 'Childrens Coffee';

export interface CoffeeKitchen {
  coffee: number, // Weight of Coffee in g
  milk: number, // amount in ml
  oatMilk: number, //amount in ml,
  sugar: number, // amount in g,
  currentlyMaking?: CoffeeTypes, // random name,
  currentlyAdded: Set<keyof Omit<CoffeeKitchen, 'currentlyMaking'>>
}

export enum Action {
  RESET, ADD_MILK, ADD_OAT_MILK, ADD_SUGAR, BREW, ADD_COFFEE,
}

type ResetKitchenAction = ReducerAction<Action.RESET, CoffeeKitchen>;
type AddMilkAction = ReducerAction<Action.ADD_MILK, number>;
type AddOatMilkAction = ReducerAction<Action.ADD_OAT_MILK, number>;
type AddSugarAction = ReducerAction<Action.ADD_SUGAR, number>;
type AddCoffeeAction = ReducerAction<Action.ADD_COFFEE, number>;
type BrewAction = ReducerAction<Action.BREW, undefined>;

export type CoffeeKitchReducerAction =
| ResetKitchenAction
| AddMilkAction
| AddOatMilkAction
| AddSugarAction
| AddCoffeeAction
| BrewAction;