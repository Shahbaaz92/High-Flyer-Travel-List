function Item({ item }) {
  return (
    <li>
      {/* <input type="checkbox" id={item.id} />
      <label  htmlFor={item.id}></label>
      */}
      <span
        style={item.packed ? { textDecoration: "line-through" } : {}}
        key={item.id}
      >
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
