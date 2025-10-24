'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import { useBasket } from "@/app/context/basketContext";

const navItems = [
    { name: "iPhone", href: "/" },
    { name: "Mac", href: "/mac" },
    { name: "iPad", href: "/ipad" },
    { name: "iWatch", href: "/iwatch" },
    { name: "Support", href: "/support" },
    { name: "Products", href: "/products" }
];

type Props = { style?: React.CSSProperties }

export default function Navbar({ style }: Props) {
    const { items } = useBasket();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const handleNavClick = (href: string) => {
        const offcanvasEl = document.getElementById("offcanvasNavbar");
        if (offcanvasEl) {
            const instance = (window as any).bootstrap?.Offcanvas.getInstance(offcanvasEl);
            if (instance) instance.hide();
        }

        document.body.style.overflow = "";
        const backdrop = document.querySelector(".offcanvas-backdrop");
        if (backdrop) backdrop.remove();

        router.push(href);
    };

    return (
        <nav className={`navbar ${styles.container}`} style={style}>
            <div className={`container-fluid ${styles.containerFluid}`}>
                <Link href="/" className={`navbar-brand ${styles.logo}`} onClick={() => handleNavClick("/")}>
                    <FontAwesomeIcon icon={faApple} style={{ fontSize: "50px" }} />
                </Link>

                <div className={styles.menu}>
                    <ul>
                        {navItems.map(item => (
                            <li key={item.name}>
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                                    className={`${styles.link} ${pathname === item.href ? styles.active : ""}`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.basket}>
                    <Link href="/basket" onClick={() => handleNavClick("/basket")}>
                        <FontAwesomeIcon
                            icon={faBasketShopping}
                            style={{ color: "white", cursor: "pointer", fontSize: "25px" }}
                            className={styles.icon2}
                        />
                    </Link>
                    <div className={styles.number}>{items.length}</div>
                </div>

                <button
                    className={`navbar-toggler ${styles.menuicon}`}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"                    
                >
                    <span className={`${styles.icon}`}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "25px" }} />
                    </span>
                </button>

                <div
                    className={`offcanvas offcanvas-end`}
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    style={{backgroundColor: "black"}}
                >
                    <div className="offcanvas-header">
                        <Link href="/" className={`navbar-brand ${styles.logo}`} onClick={() => handleNavClick("/")}>
                            <FontAwesomeIcon icon={faApple} style={{ fontSize: "50px" }} />
                        </Link>
                        <button className={`btn-close ${styles.close}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                            {navItems.map(item => (
                                <li className={`nav-item ${styles.item}`} key={item.name}>
                                    <a
                                        href="#"
                                        onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                                        className={`nav-link ${pathname === item.href ? styles.a2 : ''} ${styles.a}`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
