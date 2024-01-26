const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Loki",
      animal: "Dog",
      breed: "Pomeranian",
    }),
    React.createElement(Pet, {
      name: "Hazel",
      animal: "Cat",
      breed: "Tabby",
    }),
    React.createElement(Pet, {
      name: "Churro",
      animal: "Rabbit",
      breed: "Holland Lop",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
