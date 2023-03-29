export default function Searchbar({ search, setSearch }) {
  return (
    <div className="searchbar">
      <input
        placeholder="Search pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
