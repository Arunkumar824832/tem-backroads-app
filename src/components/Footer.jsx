import { pageLinks, socialLinks } from "../data";
const footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((links) => {
          const { id, href, text } = links;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((links) => {
          const { id, href, icon } = links;
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default footer;
