const ExampleCarouselImage = ({ text , img }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '70vh', 
        backgroundImage: `url(${img})`, 
        backgroundSize : 'cover',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
      }}
    >
      {text}
    </div>
  );
};

export default ExampleCarouselImage;