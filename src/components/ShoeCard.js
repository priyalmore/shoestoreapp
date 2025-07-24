const ShoeCard = ({ shoe, addToCart }) => {
  if (!shoe) return null; // ✅ Defensive check to prevent crash

  return (
    <div className="shoe-card">
      <img src={shoe.image} alt={shoe.name} />
      <h3>{shoe.name}</h3>
      <p>${shoe.price}</p>
      <button onClick={() => addToCart(shoe)}>Add to Cart</button>
    </div>
  );
};
export default ShoeCard;
