import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input id="search" type="text" value={filter} onChange={onFilterChange} />
    </div>
  );
};

export default SearchBox;
