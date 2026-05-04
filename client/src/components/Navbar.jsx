
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav style={{ display: "flex", gap: "10px" }}>
            <Link to="/">Home</Link>
                  <Link to="/login">Login</Link>
                        <Link to="/dashboard">Dashboard</Link>
                            </nav>
                              );
                              }