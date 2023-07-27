import React from "react";

const SearchItem = () => {
  return (
    <div style={styles.searchItem}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        style={styles.siImg}
      />
      <div style={styles.siDesc}>
        <h1 style={styles.siTitle}>Tower Street Apartments</h1>
        <span style={styles.siDistance}>500m from center</span>
        <span style={styles.siTaxiOp}>Free airport taxi</span>
        <span style={styles.siSubtitle}>
          Studio Apartment with Air conditioning
        </span>
        <span style={styles.siFeatures}>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span style={styles.siCancelOp}>Free cancellation </span>
        <span style={styles.siCancelOpSubtitle}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div style={styles.siDetails}>
        <div style={styles.siRating}>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div style={styles.siDetailTexts}>
          <span style={styles.siPrice}>$112</span>
          <span style={styles.siTaxOp}>Includes taxes and fees</span>
          <button style={styles.siCheckButton}>See availability</button>
        </div>
      </div>
    </div>
  );
};

let styles = {
  searchItem: {
    border: "1px solid #cecece",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "20px",
  },

  siImg: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  },

  siDesc: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 2,
  },

  siTitle: {
    fontSize: "20px",
    color: "#0071c2",
  },

  siDistance: {
    fontSize: "12px",
  },

  siTaxiOp: {
    fontSize: "12px",
    backgroundColor: "#008009",
    color: "white",
    width: "max-content",
    padding: "3px",
    borderRadius: "5px",
  },

  siSubtitle: {
    fontSize: "12px",
    fontWeight: 700,
  },

  siFeatures: {
    fontSize: "12px",
  },

  siCancelOp: {
    fontSize: "12px",
    color: "#008009",
    fontWeight: 700,
  },

  siCancelOpSubtitle: {
    fontSize: "12px",
    color: "#008009",
  },

  siDetails: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  siRating: {
    display: "flex",
    justifyContent: "space-between",
  },

  siRatingSpan: {
    fontWeight: 500,
  },

  siRatingButton: {
    backgroundColor: "#003580",
    color: "#fff",
    padding: "5px",
    fontWeight: 700,
    border: "none",
  },

  siDetailTexts: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },

  siPrice: {
    fontSize: "24px",
  },

  siTaxOp: {
    fontSize: "12px",
    color: "#cdcdcd",
  },

  siCheckButton: {
    backgroundColor: "#0071c2",
    color: "#fff",
    fontWeight: 700,
    padding: "10px 5px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default SearchItem;
