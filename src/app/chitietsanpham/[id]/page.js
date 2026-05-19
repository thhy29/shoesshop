import Image from "next/image";
import styles from "./page.module.css"; 
// Lưu ý: Thư mục Footer viết hoa chữ F, header viết thường theo ảnh của bạn
import Header from "@/app/components/header/header"; 
import Footer from "@/app/components/Footer/footer"; 

async function getProduct(id) {
  const products = [
    {
      id: "1",
      name: "Giày đá bóng Nike Tiempo Legend 10",
      price: 2950000,
      oldPrice: 4000000,
      image: "/hinh1.jpg",
      description: "Nike Tiempo Legend 10 mang lại cảm giác bóng vượt trội với chất liệu da tổng hợp cao cấp. Thiết kế ôm sát, trọng lượng siêu nhẹ giúp bạn làm chủ mọi pha bóng.",
    },
    {
      id: "2",
      name: "Giày đá bóng cỏ nhân tạo Nike Air Zoom Mercurial Vapor 16",
      price: 2050000,
      oldPrice: 2669000,
      image: "/hinh2.jpg",
      description: "Nike Ari Zoom Mercurial Vapor 16 mang lại cảm giác bóng vượt trội với chất liệu da tổng hợp cao cấp. Thiết kế ôm sát, trọng lượng siêu nhẹ giúp bạn làm chủ mọi pha bóng.",
    },
    {
      id: "3",
      name: "Giày đá bóng cỏ nhân tạo Nike Tiempo Legend 10",
      price: 2050000,
      oldPrice: 2529000,
      image: "/HINH3.jpg",
      description: "Giày đá bóng cỏ nhân tạo Nike Tiempo Legend 10 mang lại cảm giác bóng vượt trội với chất liệu da tổng hợp cao cấp. Thiết kế ôm sát, trọng lượng siêu nhẹ giúp bạn làm chủ mọi pha bóng.",
    },
    {
      id: "4",
      name: "Giày đá bóng cỏ nhân tạo Nike Air Zoom Mercurial Vapor 16 Academy",
      price: 2150000,
      oldPrice: 2955000,
      image: "/HINH4.jpg",
      description: "Giày đá bóng cỏ nhân tạo Nike Air Zoom Mercurial Vapor 16 Academy mang lại cảm giác bóng vượt trội với chất liệu da tổng hợp cao cấp. Thiết kế ôm sát, trọng lượng siêu nhẹ giúp bạn làm chủ mọi pha bóng.",
    },
    {
      id: "5",
      name: "Giày đá bóng cỏ nhân tạo Joma Top Flex Pito 2462 Limited",
      price: 1680000,
      oldPrice: 2295000,
      image: "/HINH5.jpg",
      description: "Giày đá bóng cỏ nhân tạo Joma Top Flex Pito 2462 Limited mang lại cảm giác bóng vượt trội với chất liệu da tổng hợp cao cấp. Thiết kế ôm sát, trọng lượng siêu nhẹ giúp bạn làm chủ mọi pha bóng.",
    },
    {
      id: "6",
      name: "Giày đá bóng cỏ nhân tạo Nike Tiempo Legend 10 Pro",
      price: 2750000,
      oldPrice: 4059000,
      image: "/HINH6.jpg",
      description: "Giày đá bóng cỏ nhân tạo Nike Tiempo Legend 10 Pro mang lại cảm giác bóng vượt trội với chất liệu da tổng hợp cao cấp. Thiết kế ôm sát, trọng lượng siêu nhẹ giúp bạn làm chủ mọi pha bóng.",
    }, {
      id: "7",
      name: "Giày bóng đá Nike Tiempo Legend 10 Academy TF",
      price: 1990000,
      oldPrice: 2669000,
      image: "/hinh7.jpg",
      description: "Giày bóng đá Nike Tiempo Legend 10 Academy TF mang lại cảm giác bóng vượt trội với chất liệu da tổng hợp cao cấp. Thiết kế ôm sát, trọng lượng siêu nhẹ giúp bạn làm chủ mọi pha bóng.",
    },
    {
      id: "8",
      name: "Giày đá bóng cỏ nhân tạo adidas F50 League TF",
      price: 1850000,
      oldPrice: 2400000,
      image: "/hinh8.jpg",
      description: "Giày đá bóng cỏ nhân tạo adidas F50 League TF mang lại cảm giác bóng vượt trội với chất liệu da tổng hợp cao cấp. Thiết kế ôm sát, trọng lượng siêu nhẹ giúp bạn làm chủ mọi pha bóng.",
    },
    {
      id: "9",
      name: "Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Academy TF Mbappé",
      price: 1990000,
      oldPrice: 2779000,
      image: "/hinh9.jpg",
      description: "Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Academy TF Mbappé mang lại cảm giác bóng vượt trội với chất liệu da tổng hợp cao cấp. Thiết kế ôm sát, trọng lượng siêu nhẹ giúp bạn làm chủ mọi pha bóng.",
    },
    {
      id: "10",
      name: "Giày đá bóng Nike Tiempo Legend 10 Pro TF Mad Brilliance",
      price: 2390000,
      oldPrice: 4000000,
      image: "/hinh10.jpg",
      description: "Giày đá bóng Nike Tiempo Legend 10 Pro TF Mad Brilliance mang lại cảm giác bóng vượt trội với chất liệu da tổng hợp cao cấp. Thiết kế ôm sát, trọng lượng siêu nhẹ giúp bạn làm chủ mọi pha bóng.",
    },
  ];
  return products.find((p) => p.id === id);
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return <div className={styles.notFound}>Không tìm thấy sản phẩm</div>;

  return (
    <>
      {/* BẮT BUỘC: Phải có thẻ Header ở đây */}
      <Header />
      
      {/* Bao bọc phần nội dung bằng thẻ main để Header nằm trên cùng */}
      <main className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            priority 
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.priceRow}>
            <span className={styles.currentPrice}>{product.price.toLocaleString()}₫</span>
            <span className={styles.oldPrice}>{product.oldPrice.toLocaleString()}₫</span>
          </div>
          <div className={styles.description}>
            <h3>Mô tả chi tiết</h3>
            <p>{product.description}</p>
          </div>
          <button className={styles.button}>THÊM VÀO GIỎ HÀNG</button>
        </div>
      </main>
      <Footer />
    </>
  );
}