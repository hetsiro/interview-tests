import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from './hooks/useCatImage';

export const App = () => {

  const { fact, refreshFact } = useCatFact();
  const { image } = useCatImage( fact );

  return (
    <main>
      <button onClick={ refreshFact }>New Cats</button>
      <p>{fact}</p>
      <img src={image}></img>
    </main>
  );
};
