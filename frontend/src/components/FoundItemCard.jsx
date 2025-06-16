import '././styles/ItemCard.css';
import hero from '../assets/images/earbud.png'

const FoundItemCard = ({ item }) => {
  const uploadDate = new Date(item.createdAt).toLocaleDateString();
  const foundDate = new Date(item.dateFound).toLocaleDateString();
  return (
    <div className="found-card">
      {/* <h2 className="card-title">Found Item Report</h2> */}
      <div className="image-container">
        <img src= {item.image} alt="Found Item" />
      </div>
      <div className="info">
        <p><strong>Item Name :</strong> {item.category}</p>
        <p><strong>Description :</strong> {item.description}</p>
        <p><strong>Found By :</strong> {item.foundBy}</p>
        <p><strong>Found Date :</strong> {foundDate}</p>
        <p><strong>Found Location :</strong> {item.foundLocation}</p>
        <p><strong>Founder's Contact :</strong> {item.contact}</p>
        <p><strong>Founder's Roll No :</strong> {item.roll}</p>
        <p className="date">

          
          {uploadDate}
        </p>
      </div>
    </div>
  );
};

export default FoundItemCard;
