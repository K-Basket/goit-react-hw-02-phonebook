export function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            <span>{name}</span>
            <span>: {number}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
