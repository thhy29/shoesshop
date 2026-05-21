import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  const products = [
    {
      id: 1,
      name: "Áo thun nam basic",
      price: 120000,
      oldPrice: 200000,
      image: "/1.jpg",
      remain: 20,
      discount: 40,
    },
    {
      id: 2,
      name: "Áo hoodie unisex",
      price: 350000,
      oldPrice: 500000,
      image: "/2.jpg",
      remain: 15,
      discount: 30,
    },
    {
      id: 3,
      name: "Quần jean slim fit",
      price: 400000,
      oldPrice: 600000,
      image: "/3.jpg",
      remain: 10,
      discount: 35,
    },
    {
      id: 4,
      name: "Áo sơ mi trắng",
      price: 250000,
      oldPrice: 350000,
      image: "/4.jpg",
      remain: 25,
      discount: 28,
    },
    {
      id: 5,
      name: "Áo khoác bomber",
      price: 500000,
      oldPrice: 700000,
      image: "/5.jpg",
      remain: 12,
      discount: 30,
    },
  
    // 👉 THÊM HÀNG MỚI (5 sản phẩm nữa)
    {
      id: 6,
      name: "Áo thun nữ form rộng",
      price: 150000,
      oldPrice: 250000,
      image: "/6.jpg",
      remain: 18,
      discount: 40,
    },
    {
      id: 7,
      name: "Chân váy ngắn",
      price: 220000,
      oldPrice: 300000,
      image: "/7.jpg",
      remain: 14,
      discount: 25,
    },
    {
      id: 8,
      name: "Quần short jean",
      price: 180000,
      oldPrice: 280000,
      image: "/8.jpg",
      remain: 20,
      discount: 35,
    },
    {
      id: 9,
      name: "Áo croptop nữ",
      price: 130000,
      oldPrice: 200000,
      image: "/11.jpg",
      remain: 22,
      discount: 35,
    },
    {
      id: 10,
      name: "Áo khoác jean",
      price: 450000,
      oldPrice: 600000,
      image: "/10.jpg",
      remain: 10,
      discount: 25,
    },
  ];

  return (
    <div className={styles.container}>

      {/* HEADER */}
      <div className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </nav>

        <div className={styles.logo}>NEXT.js</div>
      </div>

      {/* CONTENT */}
      <div className={styles.item2}>
        <div className={styles.mainContent}>
          {products.map((item) => (
            <div key={item.id} className={styles.product}>

              {/* SALE */}
              <div className={styles.sale}>-{item.discount}%</div>

              {/* IMAGE */}
              <div className={styles.productImage}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                />
              </div>

              {/* NAME */}
              <div className={styles.productName}>
                {item.name}
              </div>

              {/* PRICE */}
              <div className={styles.productPrice}>
                <span className={styles.price}>
                  {item.price.toLocaleString()}₫
                </span>
                <span className={styles.oldPrice}>
                  {item.oldPrice.toLocaleString()}₫
                </span>
              </div>

              {/* REMAIN */}
              <div className={styles.productRemain}>
                Còn {item.remain} sản phẩm
              </div>

              {/* BUTTON */}
              <div className={styles.buyButton}>
              <Link href={`/chitietsanpham/${item.id}`}>Mua ngay</Link>
              </div>

            </div>
          ))}
        </div>
      </div>

   {/* FOOTER */}
<div className={styles.footer}>
  <div className={styles.footerContainer}>
    
    {/* CỘT 1 */}
    <div className={styles.footerCol}>
      <h3>Fashion Shop</h3>
      <p>Chuyên cung cấp quần áo thời trang chất lượng cao, giá tốt.</p>
    </div>

    {/* CỘT 2 */}
    <div className={styles.footerCol}>
      <h4>Liên kết</h4>
      <ul>
        <li>Trang chủ</li>
        <li>Sản phẩm</li>
        <li>Giới thiệu</li>
        <li>Liên hệ</li>
      </ul>
    </div>

    {/* CỘT 3 */}
    <div className={styles.footerCol}>
      <h4>Hỗ trợ</h4>
      <ul>
        <li>Chính sách đổi trả</li>
        <li>Chính sách bảo mật</li>
        <li>Hướng dẫn mua hàng</li>
      </ul>
    </div>

    {/* CỘT 4 */}
    <div className={styles.footerCol}>
      <h4>Liên hệ</h4>
      <p>Email: TrungTin@shop.com</p>
      <p>Hotline: 0775599712</p>
    </div>

  </div>

  <div className={styles.footerBottom}>
    © 2026 Trung Tin Shop | All Rights Reserved
  </div>
</div>

    </div>
  );
}
