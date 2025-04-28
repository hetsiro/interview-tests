import { useMemo } from "react";
import { useCat } from "./hooks/useCat";

export const App = () => {

  const { data: fact, refreshData: refreshFact } = useCat("https://catfact.ninja/fact", "fact", []);
  
  const imageUrl = useMemo(() => {
    if (!fact) return null;
    const firstWord = fact.split(" ")[0];
    return `https://cataas.com/cat/says/${firstWord}?json=true`;
  }, [fact]);

  const { data: image } = useCat(imageUrl, "url", [fact]);

  return (
    <main>
      <button onClick={ refreshFact }>New Cats</button>
      <p>{fact}</p>
      {image ? <img src={image}></img> : <p>Loading...</p>}
    </main>
  );
};
