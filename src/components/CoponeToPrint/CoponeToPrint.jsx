import './CoponeToPrint.css';
import Barcode from 'react-barcode';

// هذا هو المكون الذي سيتم تحويله إلى PDF
const CouponToPDF = ({ barcodeValue }) => {
  return (
    // **مهم:** حدد الأبعاد (width/height) مباشرةً بالـ CSS لضمان حجم الكارد
    <div 
      id="coupon-content"
      style={{ 
        width: '600px', 
        height: '300px', 
        padding: '10px', 
        border: '1px solid #333',
        position:"absolute",
        left: "9px",
        top:"auto",
        backgroundColor:"#Fff"
      }}
    >
      <h3 style={{ margin: '0 0 5px 0' }}>كوبون خصم مميز</h3>
      <p style={{ margin: '0 0 10px 0', fontSize: '12px' }}>xxx xxx xxx</p>
      <p style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>الكود: </p>
      
      {/* توليد الباركود - يجب أن يكون SVG ليكون واضحاً في PDF */}
      <Barcode 
        value={barcodeValue} 
        width={1} 
        height={40} 
        displayValue={false} 
        format="CODE128" 
      />
    </div>
  );
};

export default CouponToPDF;