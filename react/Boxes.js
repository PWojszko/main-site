const Boxes = (props) => {
  return (
    <section className="boxes">
      <div className="boxes__box">
        <img src="images/placeholder.jpg" alt="" />
        <div className="box__text">
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ipsum minus illo ratione vitae hic dicta, eius error, velit
            distinctio labore, placeat doloremque nulla ut est? Dolores numquam
            adipisci accusamus?
          </p>
        </div>
      </div>
      <div className="boxes__box">
        <img src="images/placeholder.jpg" alt="" />
        <div className="box__text">
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ipsum minus illo ratione vitae hic dicta, eius error, velit
            distinctio labore, placeat doloremque nulla ut est? Dolores numquam
            adipisci accusamus?
          </p>
        </div>
      </div>
      <div className="boxes__box">
        <img src="images/placeholder.jpg" alt="" />
        <div className="box__text">
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ipsum minus illo ratione vitae hic dicta, eius error, velit
            distinctio labore, placeat doloremque nulla ut est? Dolores numquam
            adipisci accusamus?
          </p>
        </div>
      </div>
      <div
        onClick={() => props.handleBoxOverlayClick()}
        className={`boxes__box-overlay__button${
          props.boxOverlayActive === ""
            ? ""
            : ` boxes__box-overlay__button--active--${props.boxOverlayActive}`
        }`}
      >
        <div className="box-overlay__button_lines">
          <div className="box-overlay__button__line button__line--1"></div>
          <div className="box-overlay__button__line button__line--2"></div>
          <div className="box-overlay__button__line button__line--3"></div>
          <div className="box-overlay__button__line button__line--4"></div>
        </div>
      </div>
      <section
        className={`boxes__box-overlay${
          props.boxOverlayActive === ""
            ? ""
            : ` boxes__box-overlay--active--${props.boxOverlayActive}`
        }`}
      ></section>
    </section>
  );
};
