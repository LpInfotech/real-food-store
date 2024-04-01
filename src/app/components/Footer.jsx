

const Footer = () => {
  return (
    <footer className='py-3 text-black text-center'>
      Copyright<span className='text-amber-800 mx-2'>Real Food Store</span>{new Date().getFullYear()}
    </footer>
  );
};

export default Footer;