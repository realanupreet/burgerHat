import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import StoreContext from "../context/store-context";
import MedusaLogo from "../public/BurgerHat.PNG";
import BakeryBanner from "../public/banner.JPG";
import Banner from "../public/banner.SVG";
import BurgerHands from "../public/burgerbanner.PNG";
import ChocolateSplash from "../public/chocolatesplash.PNG";
import field from "../public/fieldSvg.svg";
import styles from "../styles/landing-page.module.css";
import store from "../styles/store.module.css";
import footer from "../styles/footer.module.css";
import { createClient } from "../utils/client";
import { formatPrices } from "../utils/prices";
import Condiments from "../public/condiments.PNG";

export default function Home({ products }) {
  const { cart } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.logo}>
            <Image src={Banner} className={styles.logo}></Image>
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
                      >
                        <a target="_blank">
                          <div className={store.imgHolder}>
                            {/* <Image
                              src={p.thumbnail}
                              alt="thumbnail"
                              width={300}
                              height={300}
                            ></Image> */}
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
                        </a>
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
              <a>
                <Image src={MedusaLogo} alt="logo" />
              </a>
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
