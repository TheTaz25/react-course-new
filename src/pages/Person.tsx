import { useContext } from 'react';
import { AppContext } from '../contexts/appContext';

const PersonComponent: React.FC = () => {
  const { person, changePerson } = useContext(AppContext);

  if (!person) return null;

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          type="text"
          value={person.name}
          onChange={(event) => changePerson?.changeName(event.target.value)}
        />
      </div>
      <div>
        <span>Age</span>
        <span>{person.age}</span>
      </div>
      <div>
        <input type="text" value={person.likes.join(',')} onChange={(event) => changePerson?.changeLikes(event.target.value)} />
        <ul>
          {person.likes.map((l) => (
            <li key={l}>
              {l}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonComponent;
