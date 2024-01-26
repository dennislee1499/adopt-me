import { createRoot } from 'react-dom/client';
import Pet from "./Pet.jsx";


const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Loki" animal="Dog" breed="Pomeranian"></Pet>
      <Pet name="Hazel" animal="Cat" breed="Tabby"></Pet>
      <Pet name="Churro" animal="Rabbit" breed="Holland Lop"></Pet>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
