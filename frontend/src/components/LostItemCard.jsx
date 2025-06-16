import '././styles/ItemCard.css';
import hero from '../assets/images/earbud.png'

const LostItemCard = ({ item }) => {
      const uploadDate = new Date(item.createdAt).toLocaleDateString();
    const lostDate = new Date(item.dateLost).toLocaleDateString();

  return (
    <div className="found-card">
      {/* <h2 className="card-title">Found Item Report</h2> */}
      <div className="image-container">
        <img src= {item.image} alt="Found Item" />
      </div>
      <div className="info">
        <p><strong>Item Name :</strong> {item.category}</p>
        <p><strong>Description :</strong> {item.description}</p>
        <p><strong>Owner :</strong> {item.owner}</p>
        <p><strong>Lost Date :</strong> {lostDate}</p>
        <p><strong>Lost Location :</strong> {item.lostLocation}</p>
        <p><strong>Owner's Contact :</strong> {item.contact}</p>
        <p><strong>Owner's Roll No:</strong> {item.roll}</p>
        <p className="date">{item.reportDate}</p>
        <p className="date">

          
          {uploadDate}
        </p>
      </div>
    </div>
  );
};

export default LostItemCard;
