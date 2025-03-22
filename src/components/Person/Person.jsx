function Person({ name, age, college }) {
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <li>{age}</li>
        <li>{college}</li>
      </ul>
    </div>
  );
}
export default Person;
