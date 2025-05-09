function PropsComponent() {
  return (
    <div>
      <h1>Hello{props.name}</h1>
    </div>
  );
}

function PropsComponent({ name }) {
  return (
    <div>
      <Welcome name ='Alice' />
      <Welcome name ='Bob' />
         
    </div>
  );
}

export default PropsComponent;
