import Image from "next/image";
import styles from "./page.module.css";
import  Header  from "./components/header/header.js"
import Footer from "./components/Footer/footer.js"
import Link from "next/link";
export default function Home() {
  return (
        <div className={styles.container} >
          <Header/>
       <div className={styles.item2}>
        <div className={styles.mainContent}>
        <Link href="/chitietsanpham/1">
        <div className={styles.product}>
        <div className={styles.productImage}> 
        <Image src="/hinh1.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày đá bóng cỏ nhân tạo Nike Tiempo Ligera Pro TF</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,950,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>4.000.000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div>

            </div>
            </Link>

            <Link href="/chitietsanpham/2">
          <div className={styles.product}>
          <div className={styles.productImage}> 
        <Image src="/hinh2.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày đá bóng cỏ nhân tạo Nike Air Zoom Mercurial Vapor 16 Academy TF Attack</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,050,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,669,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div>
</div>
</Link> 

<Link href="/chitietsanpham/3">
          <div className={styles.product}>
          <div className={styles.productImage}> 
        <Image src="/HINH3.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày đá bóng cỏ nhân tạo Nike Tiempo Legend 10 Academy TF</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,050,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,529,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div>
          </div></Link>
          <Link href="/chitietsanpham/4">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/HINH4.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày đá bóng cỏ nhân tạo Nike Air Zoom Mercurial Vapor 16 Academy TF</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,150,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,955,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div>
</Link>
          {/* hàng thu 2 */}
          <Link href="/chitietsanpham/5">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/HINH5.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày đá bóng cỏ nhân tạo Joma Top Flex Pito 2462 Limited Edition TF</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>1,680,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,295,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div></Link>
<Link href="/chitietsanpham/6">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/HINH6.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày đá bóng cỏ nhân tạo Nike Tiempo Legend 10 Pro TF Scary Good </h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,750,000₫</strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>4,059,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div> </Link>
<Link href="/chitietsanpham/7">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh7.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày bóng đá Nike Tiempo Legend 10 Academy TF Prism </h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>1,990,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,669,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div> </Link>
<Link href="/chitietsanpham/8">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh8.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày đá bóng cỏ nhân tạo adidas F50 League TF Celestial Victory</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>1,850,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,400,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div></Link>
          {/* hàng thu 3 */}
          <Link href="/chitietsanpham/9">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh9.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Academy TF Mbappé Personal Edition</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>1,990,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,779,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div></Link>
<Link href="/chitietsanpham/10">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh10.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày đá bóng Nike Tiempo Legend 10 Pro TF Mad Brilliance</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,390,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>4.000.000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div></Link>
        </div>
        </div>
        <Footer/>
    </div>
  );
}

  