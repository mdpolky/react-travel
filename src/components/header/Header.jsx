import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import "./header.css";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div style={styles.header}>
      <div
        style={
          type === "list"
            ? styles.headerContainerListMode
            : styles.headerContainer
        }
      >
        <div style={styles.headerList}>
          <div style={styles.headerListItemActive}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div style={styles.headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div style={styles.headerListItem}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div style={styles.headerListItem}>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div style={styles.headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 style={styles.headerTitle}>Find deals for any season</h1>
            <p style={styles.headerDescription}>
              From cozy bed & breakfasts to luxury hotels
            </p>
            <button style={styles.headerButton}>Sign in / Register</button>

            <div style={styles.headerSearch}>
              <div style={styles.headerSearchItem}>
                <FontAwesomeIcon icon={faBed} style={styles.headerIcon} />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  style={styles.headerSearchInput}
                  className="headerSearchInputPlaceholderTextColor"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div style={styles.headerSearchItem}>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={styles.headerIcon}
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  style={styles.headerSearchText}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div style={styles.headerSearchItem}>
                <FontAwesomeIcon icon={faPerson} style={styles.headerIcon} />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  style={styles.headerSearchText}
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div style={styles.options}>
                    <div style={styles.optionItem}>
                      <span style={styles.optionText}>Adult</span>
                      <div style={styles.optionCounter}>
                        <button
                          disabled={options.adult <= 1}
                          style={styles.optionCounterButton}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span style={styles.optionCounterNumber}>
                          {options.adult}
                        </span>
                        <button
                          style={styles.optionCounterButton}
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div style={styles.optionItem}>
                      <span style={styles.optionText}>Children</span>
                      <div style={styles.optionCounter}>
                        <button
                          disabled={options.children <= 0}
                          style={styles.optionCounterButton}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span style={styles.optionCounterNumber}>
                          {options.children}
                        </span>
                        <button
                          style={styles.optionCounterButton}
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div style={styles.optionItem}>
                      <span style={styles.optionText}>Room</span>
                      <div style={styles.optionCounter}>
                        <button
                          disabled={options.room <= 1}
                          style={styles.optionCounterButton}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span style={styles.optionCounterNumber}>
                          {options.room}
                        </span>
                        <button
                          style={styles.optionCounterButton}
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div style={styles.headerSearchItem}>
                <button style={styles.headerButton} onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

let styles = {
  header: {
    backgroundColor: "#003580",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  headerContainer: {
    width: "100%",
    maxWidth: "1024px",
    margin: "20px 0px 100px 0px",
  },
  headerContainerListMode: {
    margin: "20px 0px 0px 0px",
  },
  headerList: {
    display: "flex",
    gap: "40px",
    marginBottom: "50px",
  },
  headerListItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  headerListItemActive: {
    border: "1px solid #fff",
    padding: "10px",
    borderRadius: "20px",
  },
  headerDescription: {
    margin: "20px 0px",
  },
  headerButton: {
    backgroundColor: "#0071c2",
    color: "#fff",
    fontWeight: 500,
    padding: "10px",
    border: "none",
    cursor: "pointer",
  },
  headerSearch: {
    height: "30px",
    backgroundColor: "#fff",
    border: "3px solid #febb02",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "10px 0px",
    borderRadius: "5px",
    position: "absolute",
    bottom: "-25px",
    width: "100%",
    maxWidth: "1024px",
  },
  headerIcon: {
    color: "#dedede",
  },
  headerSearchItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  headerSearchInput: {
    border: "none",
    outline: "none",
  },
  headerSearchText: {
    color: "#dedede",
    cursor: "pointer",
  },
  date: {
    position: "absolute",
    top: "50px",
    zIndex: 2,
  },
  options: {
    zIndex: 2,
    position: "absolute",
    top: "50px",
    backgroundColor: "#fff",
    color: "#cecece",
    borderRadius: "5px",
    webKitBoxShadow: "0px 0px 10px -5px rgba(0,0,0,0.4)",
    boxShadow: "0px 0px 10px -5px rgba(0,0,0,0.4)",
  },
  optionItem: {
    width: "200px",
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  },
  optionText: {
    //todo: style
  },
  optionCounterNumber: {
    //todo: style
  },
  optionCounter: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "12px",
    color: "#000",
  },
  optionCounterButton: {
    width: "30px",
    height: "30px",
    border: "1px solid #0071c2",
    color: "#0071c2",
    backgrounColor: "#fff",
  },
  optionCounterButtonDisabled: {
    cursor: "not-allowed",
  },
};

export default Header;
