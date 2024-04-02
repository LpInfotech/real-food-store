

const Footer = () => {
  return (
    <footer className='bg-slate-50 py-3 text-black text-center mt-auto'>
      © All rights reserved<span className='text-amber-800 mx-2'>Real Food Store</span>{new Date().getFullYear()}.
    </footer>
  );
};

export default Footer;