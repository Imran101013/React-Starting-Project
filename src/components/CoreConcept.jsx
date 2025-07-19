

export default function CoreConcept({img, title, description}) {
  return (
    <li style={{ width: "10rem", textAlign: "center", border: "1px solid orange", borderRadius: "5px", padding: "5px" }}>
      <img
        style={{ height: "4rem", width: "6rem", objectFit: "cover" }}
        src={img}
        alt={title}
      />
      <h3 style={{ margin: "0.5rem 0" }}>{title}</h3>
      <p style={{ fontSize: "0.9rem" }}>{description}</p>
    </li>
  );
}
