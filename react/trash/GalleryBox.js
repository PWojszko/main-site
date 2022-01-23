const GalleryBox = (props) => (
  <div
    onClick={() => props.handleGalleryClick(props.id)}
    className={`${props.className} active-${props.active}`}
  >
    <img src={props.imageLocation} alt="" />
  </div>
);
