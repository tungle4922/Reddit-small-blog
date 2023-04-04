import "./footer.css";

const Footer = (props) => {
  const { isOpenPost, setOpen } = props;

  return (
    <footer>
      <div className="footer-title" onClick={() => setOpen(!isOpenPost)}>
        {isOpenPost ? <p>x</p> : <p style={{color: "#000"}}>+</p>}
      </div>
    </footer>
  );
};

export default Footer;
