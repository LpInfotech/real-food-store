const Footer = () => {
  return (
    <footer className='bg-white dark:bg-slate-800 dark:text-white py-3 text-black text-center mt-auto'>
      © All rights reserved<span className='text-amber-800 mx-2 dark:text-orange-500'>Real Food Store</span>{new Date().getFullYear()}.
    </footer>
  );
};

export default Footer;