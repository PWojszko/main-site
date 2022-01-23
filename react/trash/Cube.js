const Cube = (props) => {
  return (
    <div className="cube__component">
      <div className="scene">
        <div className="cube">
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--back">
            <p>Lorem ipsum</p>
          </div>
          <div className="cube__face cube__face--right"></div>
          <div className="cube__face cube__face--left"></div>
          <div className="cube__face cube__face--top"></div>
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>
    </div>
  );
};
