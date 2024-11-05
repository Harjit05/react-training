function RenderingLists() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // if(items.length === 0)
  //   return (
  //   <>
  //   <h1>List</h1>
  //   <p>No item Found</p>
  //   </>
  //   );
  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default RenderingLists;
