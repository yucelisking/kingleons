import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Unleash your inner Lion
                </span>
                <br />
                and collect
                <br />
                King Leon NFTs.
              </h1>
              <p className={styles.heroSubtitle}>
                <Link className={styles.link} href="" target="_blank">
                  King Leon NFT Marketplace
                </Link>{" "}
                is a platform designed to explore the power and value of digital
                art. In this unique marketplace, represented by the symbol of a
                lion, you can access the exclusive collection of King Leon NFTs.
                On this platform where artist&lsquo;s creativity meets the
                digital world, you can discover, purchase, and build your own
                art collection with King Leon NFTs. Each NFT is presented as a
                unique digital asset, transforming into a digital artwork in the
                art world. King Leon NFT Marketplace offers an exciting art
                experience while allowing you to establish your own kingdom in
                the digital realm.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://twitter.com/kingozingo"
                  target="_blank"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
