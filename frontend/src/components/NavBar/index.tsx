import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
<button
  className={styles.hamburger}
  onClick={() => setOpen(true)}
>
  ☰
</button>

<div
  className={`${styles.overlay} ${open ? styles.open : ""}`}
  onClick={() => setOpen(false)}
/>

<aside
  className={`${styles.navbar} ${open ? styles.open : ""}`}
>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.logo}>TF</span>
          <strong>TaskFlow</strong>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={() => setOpen(false)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/projetos"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={() => setOpen(false)}
          >
            Projetos
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={() => setOpen(false)}
          >
            Perfil
          </NavLink>
        </nav>

        {/* User */}
        <div className={styles.user}>
          <div className={styles.avatar}>R</div>

          <div className={styles.userInfo}>
            <span className={styles.name}>Rafael</span>
            <span className={styles.email}>rafael@email.com</span>
          </div>
        </div>
      </aside>
    </>
  );
}
