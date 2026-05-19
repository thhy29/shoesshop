import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link"; // Nên dùng Link để tối ưu SEO và tốc độ

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Khối Logo bên trái */}
      <div className={styles.logo}>
        <Image 
          src="/shop giày bóng đá.png" 
          alt="Logo" 
          width={120} 
          height={60} 
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Khối Menu bên phải */}
      <nav className={styles.nav}>
        <ul>
          <li>Trang chủ</li>
          <li>Sản phẩm</li>
          <li className={styles.hot}>Khuyến mãi</li>
          <li>Liên hệ</li>
        </ul>
      </nav>
      
      {/* Bạn có thể thêm Icon Giỏ hàng ở đây nếu muốn */}
    </header>
  );
}