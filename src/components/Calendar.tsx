export default function Calendar() {
  let today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;

  let date = today.toLocaleDateString("fr-FR", options);
  let hour = today.toLocaleTimeString("fr-FR");

  return (
    <div className="today">
      <div className="date">{date}</div>
      <p>{hour}</p>
    </div>
  );
}
