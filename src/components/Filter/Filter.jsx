export function Filter({ value, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
}
