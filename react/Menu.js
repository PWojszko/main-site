const Menu = (props) => {
  return (
    <div
      className={`menu${
        props.menuActive === "" ? "" : ` menu--active--${props.menuActive}`
      }`}
    >
      <div className="menu__symbol menu__symbol--start">{"<>"}</div>
      <div className="menu__symbol menu__symbol--end">{"</>"}</div>
      <div className="menu__menu-list">
        <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
    </div>
  );
};
