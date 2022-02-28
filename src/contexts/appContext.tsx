import { createContext, useEffect, useState } from "react";

interface Person {
  name: string,
  age: number,
  likes: Array<string>,
}

interface ChangePerson {
  changeName: (value: string) => void,
  changeLikes: (value: string) => void,
}

interface ContextState {
  person?: Person,
  changePerson?: ChangePerson
}

const AppContext = createContext<ContextState>({});

const AppContextProvider: React.FC = ({ children }) => {
  const [person, setPerson] = useState<Person>({
    name: 'Denis',
    age: 26,
    likes: ['React', 'VIER'],
  });

  const changeName = (value: string) => {
    setPerson((previous) => ({
      ...previous,
      name: value
    }));
  };

  const changeLikes = (value: string) => {
    setPerson((previous) => ({
      ...previous,
      likes: value.split(','),
    }));
  }

  useEffect(() => {
    // Update localStorage
  }, [person]);

  useEffect(() => {
    // get value from localStorage
  }, []);

  return (
    <AppContext.Provider value={{ person, changePerson: {
      changeName,
      changeLikes
    } }}>
      {children}
    </AppContext.Provider>
  )
};

export default AppContextProvider;
export { AppContext };
