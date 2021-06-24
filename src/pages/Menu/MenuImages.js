const MenuImages = (props) => {
  let img = [];
  const images = props.images;

  img.push(
    <img className="object-cover rounded-md" src={images[0]} alt={images[0]} />
  );

  img.push(
    props.images.slice(1).map((image) => {
      return (
        <img
          className="object-cover rounded-md hidden md:block"
          src={image}
          alt={image}
        />
      );
    })
  );

  return <div className="flex flex-wrap mt-2 justify-around">{img}</div>;
};

export default MenuImages;
