import { useParams, useLocation } from 'react-router-dom';

const Greetings: React.FC = () => {
  const { name } = useParams();
  const { search } = useLocation();
  const searchParamaters = new URLSearchParams(search);
  const nameToRender = searchParamaters.get('mode') === 'upper' ? name?.toUpperCase() : name;
  return (
    <div>
      Hello {nameToRender}
    </div>
  )
};

export default Greetings;
