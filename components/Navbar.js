import Link from "next/link";
import { auth } from "../firebase/firebase.config";
import { useRouter } from "next/router";
import styles from "../styles/components/Navbar.module.scss";
import Button from "components/Button"

export default function Navbar() {
  
  const router = useRouter();
  
  const validateLogin = () => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
      router.push("/sell"); 
      } else {
      router.push("/login"); 
      }
    });
  };
  
  return (
    <header>
      <nav className={styles.nav_container}>
        <section className={styles.nav_containerLogo}>
          <Link href="/">
            <img
              src="logo.svg"
              alt="logo"
              className={styles.nav_logo}
              title="Inicio"
            />
          </Link>
        </section>

        <section className={styles.nav_mainContainerInputs}>
          <section className={styles.nav_containerInput}>
            <input type="text" placeholder="Busca tu producto ideal..." />
            <button title="Buscar">
              <img src="search.svg" alt="search" />
            </button>
          </section>

          <section className={styles.nav_containerTexts}>
            <p title="Categor&iacute;as">Categor&iacute;as</p>
            <p title="Ofertas">Ofertas de la semana</p>
            <p title="Filtrar">Filtrar</p>
          </section>
        </section>

        <section className={styles.nav_containerButton}>
          <Button
            title="Vender"
            style="Sell"
            onClick={() => {
              validateLogin();
            }}
          >
            Vender
          </Button>
        </section>

        <section className={styles.nav_icons}>
          <Link href="/cart">
            <img
              className={styles.nav_iconsImgsCart}
              src="car.svg"
              alt="Carrito"
              title="Carrito"
            />
          </Link>

          <Link href="/login">
            <img
              className={styles.nav_userImg}
              src="user.svg"
              alt="user"
              title="Perfil"
            />
          </Link>
        </section>
      </nav>
    </header>
  );
};