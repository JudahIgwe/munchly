function Footer() {
  return (
    <footer className="bg-zinc-900 text-white mt-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div>
          <h3 className="text-2xl font-black text-orange-500 tracking-tight">
            Muncly
          </h3>
          <p className="text-zinc-500 text-xs mt-2">
            &copy; {new Date().getFullYear()} Munchly Ltd. All rights reserved.
          </p>
        </div>

        {/* Right Side: Simple Links */}
        <div className="flex gap-6 text-sm text-zinc-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
