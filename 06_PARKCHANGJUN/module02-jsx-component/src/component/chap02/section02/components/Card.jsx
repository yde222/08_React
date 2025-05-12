function Card({ title, children }) {
  const container = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div style={container}>
      <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px" }}>
        {title}
      </h3>
      <div>children</div>
    </div>
  );
}

export default Card;
