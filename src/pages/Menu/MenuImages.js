const MenuImages = (props) => {
  let img = [];
  const images = props.images;

  img.push(
    <img
      className="object-cover md:w-1/3"
      key={images[0]}
      src={images[0]}
      alt={images[0]}
    />
  );

  img.push(
    props.images.slice(1).map((image) => {
      return (
        <img
          key={image}
          className="object-cover hidden md:block md:w-1/3"
          src={image}
          alt={image}
        />
      );
    })
  );

  return <div className="flex flex-wrap mt-2 justify-around">{img}</div>;
};

export default MenuImages;
