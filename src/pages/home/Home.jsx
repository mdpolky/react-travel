import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredproperties/FeaturedProperties";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div style={styles.homeContainer}>
        <Featured />
        <h1 style={styles.homeTitle}>Browse by property type</h1>
        <PropertyList />
        <h1 style={styles.homeTitle}>Homes guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

let styles = {
  homeContainer: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  homeTitle: {
    width: "1024px",
    fontSize: "20px",
  },
};

export default Home;
