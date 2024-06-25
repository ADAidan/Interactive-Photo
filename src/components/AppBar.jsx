import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./AppBar.css";

const AppBar = () => {
  return (
    <div className="app-bar">
      <h2
        style={{
          color: "rgba(0, 0, 0, 0.87)",
        }}
      >
        INTERACTIVE PHOTO
      </h2>
      <IconButton
        size="large"
        sx={{
          color: "rgb(100, 108, 255)",
        }}
      >
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default AppBar;
