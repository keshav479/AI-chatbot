import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://www.linkedin.com/in/keshav-lavania-942a33267/"}
            >
              Keshav Lavania
              &copy; 2024 Your Company. All rights reserved
            </Link>
          </span>
          👁️👁️
        </p>
      </div>
    </footer>
  );
};

export default Footer;