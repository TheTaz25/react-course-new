import { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';

const convertToUppercase = (names: Array<string>) => names.map((name) => name.toUpperCase());

const Landing: React.FC = () => {
  const [names, setNames] = useState<Array<string>>(['Jennifer', 'Diana', 'Varun']);
  const [makeUpperCase, setMakeUpperCase] = useState(false);
  const [namesToRender, setNamesToRender] = useState(names);

  useEffect(() => {
    if (makeUpperCase) {
      setNamesToRender(convertToUppercase(names));
      return;
    }
    setNamesToRender(names);
  }, [names, makeUpperCase]);

  useEffect(() => {
    // This is called when the components initially renders (onMount)
    console.log('Hello there!');
    return () => {
      // This is called when the component gets unmounted (onDismount)
      console.log('Bye');
    }
  }, []);

  const alsoGreetJulian = () => {
    setNames((previous) => [ ...previous, 'Julian' ]);
    setNames((previous) => [ ...previous, 'Marcel' ]);
  }

  const toggleUppercase = () => setMakeUpperCase((previous) => !previous);

  return (
    <div>
      <h1>Landing</h1>
      Hello there,
      <br />
      {namesToRender.join(', ')}
      <br />
      <button onClick={alsoGreetJulian}>Add Julian</button>
      <button onClick={toggleUppercase}>Uppercase it!</button>
      {/* <CoffeeKitchen /> */}
      {/* <Outlet /> */}
    </div>
  );
};

export default Landing;
