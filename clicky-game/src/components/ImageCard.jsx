function ImageCard({ image, onClick }) {
    return <img src={image.url} alt={image.name} onClick={onClick} style={{ width: '100px', height: '100px' }} />;
  }
  
  export default ImageCard;