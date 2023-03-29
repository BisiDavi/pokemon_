export default function Searchbar({ search, setSearch }) {
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}
