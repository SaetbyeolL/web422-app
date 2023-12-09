import { Card } from "react-bootstrap";

export default function Home() {
  return (
    <div>
    <title>StellaStyle</title>

    {/*Organization’s logo*/} 
    <img src="img/StellaLogo.png" alt="StellaStyle's Logo" width={200} height={100}/><br /><br />
    <hr></hr>

    {/*Introduction statement & Basic information about the web sites*/} 
    <h1>Welcome to StellaStyle Website. </h1>
    <p>StellaStyle online store offers a diverse range of products, with a particular focus on showcasing trendy and unique items, all in one convenient place.</p><br />

    {/*Mission statement*/}
    <p><b>- Organization's Mission Statement -</b></p>
    <p>"Our mission is to bring you the latest trends and unique fashion finds."<br />
       "We strive to help you express your individual style with our curated collection."<br />
       "At StellaStyle, our mission is to elevate your wardrobe and enhance your lifestyle."</p><br />

    {/* Images of product */}
    <p><b>- Products -</b></p>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flex: '0 0 calc(33.33% - 10px)', maxWidth: 'calc(33.33% - 10px)', marginRight: '10px' }}>
        <img src="img/product1.png" alt="Product1" width={250} height={250} /></div>
    <div style={{ flex: '0 0 calc(33.33% - 10px)', maxWidth: 'calc(33.33% - 10px)', marginRight: '10px' }}>
        <img src="img/product2.png" alt="Product2" width={250} height={250} /></div>
    <div style={{ flex: '0 0 calc(33.33% - 10px)', maxWidth: 'calc(33.33% - 10px)' }}>
        <img src="img/product3.png" alt="Product3" width={250} height={250} /></div>
    </div>

</div>
  )
}
