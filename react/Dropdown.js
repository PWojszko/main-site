const Dropdown = (props) => {
  return (
    <div onClick={() => props.handleDropdownClick()} className="dropdown">
      <div
        className={`dropdown__line dropdown__line-1 dropdown__line--active--${props.menuActive}`}
      ></div>
      <div
        className={`dropdown__line dropdown__line-2 dropdown__line--active--${props.menuActive}`}
      ></div>
      <div
        className={`dropdown__line dropdown__line-3 dropdown__line--active--${props.menuActive}`}
      ></div>
    </div>
  );
};
