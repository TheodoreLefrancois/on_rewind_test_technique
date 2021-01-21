import { Link } from "react-router-dom";
export default function Card({ poster, name, Tags, id }) {
  const goodId = id;
  console.log(typeof id);
  return (
    <>
      <Link to={`/video/${goodId}`}>
        <img width="100%" src={poster} alt={name} />
      </Link>
      <p>{name}</p>
      <div>
        {Tags.map((y) => (
          <p>{y.name}</p>
        ))}
      </div>
    </>
  );
}
