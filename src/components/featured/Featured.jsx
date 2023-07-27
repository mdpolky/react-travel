import React from "react";

const Featured = () => {
  return (
    <div style={styles.featured}>
      <div style={styles.featuredItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          style={styles.featuredImage}
        />
        <div style={styles.featuredTitle}>
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div style={styles.featuredItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          style={styles.featuredImage}
        />
        <div style={styles.featuredTitle}>
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div style={styles.featuredItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          style={styles.featuredImage}
        />
        <div style={styles.featuredTitle}>
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

let styles = {
  featured: {
    width: "100%",
    maxWidth: "1024px",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    zIndex: 1,
  },
  featuredItem: {
    position: "relative",
    color: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    height: "250px",
    flex: 1,
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  featuredTitle: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
  },
};

export default Featured;
