//

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
        <p className="footer">Amrit Kumar || Copyright &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
