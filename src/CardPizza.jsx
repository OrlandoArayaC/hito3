function CardPizza({ pizza }) {
  return (
    <div className="card">
      <h3>{pizza.name}</h3>
      <img src={pizza.img} alt={pizza.name} width="200" />
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
}
export default CardPizza;
