export const MenuCategories = () => {
  categories.map(el => (
    <div
      key={el.name}
      className={styles.menu_item}
      onMouseEnter={() => { setMenuItemHover(el.title) }}
    >
      <h3 id={styles.title} >{el.title}</h3>
      <p id={styles.subtitle}>{el.subtitle}</p>
    </div>
  ))
}