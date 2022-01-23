const Gallery = (props) => {
  const galleryBoxes = props.galleryBoxes.map((galleryBox) => (
    <GalleryBox
      key={galleryBox.id}
      id={galleryBox.id}
      className={galleryBox.className}
      imageLocation={galleryBox.imageLocation}
      name={galleryBox.name}
      active={galleryBox.active}
      handleGalleryClick={props.handleGalleryClick}
    />
  ));

  return (
    <section className="gallery">
      <div className="gallery-boxes">
        {galleryBoxes}
        <div className="gallery-box box-8"></div>
        <div className="gallery-box box-9">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nesciunt pariatur neque magnam ipsa. Eligendi ipsam laborum
            inventore amet? Officia laudantium tenetur explicabo illo voluptate
            harum architecto optio, odio facilis.
          </p>
        </div>
      </div>
    </section>
  );
};
