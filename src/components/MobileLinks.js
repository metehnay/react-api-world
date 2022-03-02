import React from "react";
import { motion } from "framer-motion";
import MobileNavigation from "./MobileNavigation";
import { Link } from "react-router-dom";
const MobileLinks = ({ isMobile, closeItem, isAuth, setIsAuth }) => {
  const animateForm = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      <nav className="mobile">
        <ul>
          <motion.div
            initial={animateForm}
            animate={animateTo}
            transition={{ delay: 0.05 }}
          >
            <li>
              <Link to="/" onClick={() => isMobile && closeItem(false)}>
                Homepage
              </Link>
            </li>
          </motion.div>

          {isAuth ? (
            <>
              <motion.div
                initial={animateForm}
                animate={animateTo}
                transition={{ delay: 0.05 }}
              >
                <li>
                  <Link
                    to="/favorites"
                    onClick={() => isMobile && closeItem(false)}
                  >
                    Favorites
                  </Link>
                </li>
              </motion.div>
              <motion.div
                initial={animateForm}
                animate={animateTo}
                transition={{ delay: 0.05 }}
              >
                <li>
                  <Link
                    to="/createpost"
                    onClick={() => isMobile && closeItem(false)}
                  >
                    Add API
                  </Link>
                </li>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                initial={animateForm}
                animate={animateTo}
                transition={{ delay: 0.05 }}
              >
                <li>
                  <Link
                    to="/login"
                    onClick={() => isMobile && closeItem(false)}
                  >
                    Login
                  </Link>
                </li>
              </motion.div>
              <motion.div
                initial={animateForm}
                animate={animateTo}
                transition={{ delay: 0.05 }}
              >
                <li>
                  <Link
                    to="/signup"
                    onClick={() => isMobile && closeItem(false)}
                  >
                    Sign Up
                  </Link>
                </li>
              </motion.div>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default MobileLinks;
