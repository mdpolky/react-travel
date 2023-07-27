const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.navContainer}>
        <span style={styles.logo}>react-travel</span>
        <div style={styles.navItems}>
          <button style={styles.navButton}>Register</button>
          <button style={styles.navButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

let styles = {
  navbar: {
    height: "50px",
    backgroundColor: "#003580",
    display: "flex",
    justifyContent: "center",
  },
  navContainer: {
    width: "100%",
    maxWidth: "1024px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: 500,
  },
  navButton: {
    marginLeft: "20px",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    color: "#003580",
  },
};

export default Navbar;
