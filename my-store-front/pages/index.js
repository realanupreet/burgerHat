import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import StoreContext from "../context/store-context";
import MedusaLogo from "../public/BurgerHat.PNG";
import Banner from "../public/banner.SVG";
import BurgerHands from "../public/burgerbanner.PNG";
import styles from "../styles/landing-page.module.css";
import store from "../styles/store.module.css";
import footer from "../styles/footer.module.css";
import { createClient } from "../utils/client";
import { formatPrices } from "../utils/prices";

export default function Home({ products }) {
  const { cart } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.logo}>
            <Image src={Banner} className={styles.logo} alt="banner" ></Image>
          </div>

          <p>The best burgers in town</p>
          <div className={styles.burgerhands}>
            <Image src={BurgerHands}></Image>
          </div>
        </div>

        <section id="storeSection" className={store.container}>
          <h1 className={store.title} id="menu">
            Our menu
          </h1>

          <div className={store.products}>
            <div className={store.mygrid}>
              {products &&
                products.map((p) => {
                  return (
                    <div key={p.id} className={store.card}>
                      <Link
                        href={{
                          pathname: `/product/[id]`,
                          query: { id: p.id },
                        }}
                        passHref
                        target="_blank">

                        <div className={store.imgHolder}>
                          <div
                            className={store.imgdiv}
                            style={{
                              backgroundImage: `url(${p.thumbnail})`,
                              width: "100%",
                              height: "100%",
                            }}
                          ></div>
                        </div>
                        <div className={store.pricenbutton}>
                          <p className={store.price}>
                            {formatPrices(cart, p.variants[0])}
                          </p>
                          <button>Add to cart</button>
                        </div>
                        <h2 className={store.cardtitle}>{p.title}</h2>
                        {/* <p>{p.description}</p> */}

                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <footer className={footer.container}>
        <div className={footer.flexy}>
          <div className={footer.column}>
            <Link href="/">

              <Image src={MedusaLogo} alt="logo" />

            </Link>
          </div>
          {/* <div className={footer.column}>
            <h4> Burger hat pvt. ltd</h4>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = createClient();
  const { products } = await client.products.list();

  return {
    props: {
      products,
    },
  };
};
