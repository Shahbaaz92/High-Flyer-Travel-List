function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      🧜‍♂️You have {numItems} items on your list, and you have already packed{" "}
      {numPacked} ({((numPacked / numItems) * 100).toFixed(2)})%
    </footer>
  );
}

export default Stats;
