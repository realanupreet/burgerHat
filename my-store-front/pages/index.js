import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import StoreContext from "../context/store-context";
import styles from "../styles/landing-page.module.css";
import store from "../styles/store.module.css";
import footer from "../styles/footer.module.css";
import { createClient } from "../utils/client";
import { formatPrices } from "../utils/prices";
import { useStaticData } from "../hooks/useStaticData";

export default function Home({ products }) {
  const { cart } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.logo}>
            <Image src={`../public/banner.SVG`} className={styles.logo} alt="banner" ></Image>
          </div>

          <p>The best burgers in town</p>
          <div className={styles.burgerhands}>
            <Image src={`../public/burgerbanner.PNG`}></Image>
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
                          <p className={ store.price }>
                            {formatPrices(cart, p.variants[0])}
                          </p>
                          <button>Take a look</button>
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

              <Image src={`../public/BurgerHat.PNG`} alt="logo" />

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
  // const { products } = await client.products.list();
//   let cartId = "cart_01GG01EDS3QEYAJMMF9EVC1YH8"
//     // if (localStorage) {
//     //   cartId = localStorage.getItem("cart_id")
//     // }
// console.log('cartId',cartId);
//     if (cartId) {
//       // console.log('client',client);
//       client.carts.retrieve(cartId).then((data) => {
//         console.log('carffdgdg',data);
//         fs.writeFileSync('local-cart.json', JSON.stringify(data.cart, null, 2));

//         // dispatch({ type: "setCart", payload: data.cart })
//       })
//     } else {
//       // client.carts.create({}).then((data) => {
//       //   // dispatch({ type: "setCart", payload: data.cart })
//       //   if (localStorage) {
//       //     localStorage.setItem("cart_id", data.cart.id)
//       //   }
//       // })
//     }

    // client.products.list().then((data) => {
      // dispatch({ type: "setProducts", payload: useStaticData() })
    // })
  const products = useStaticData();

  return {
    props: {
      products,
    },
  };
};
