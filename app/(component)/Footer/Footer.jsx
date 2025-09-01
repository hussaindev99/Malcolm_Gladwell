export default function Footer() {
  return (
    <footer className="bg-[#EBEBEB] text-center py-6 mt-12">
      {/* Top Navigation Links */}
      <nav className="mb-4">
        <ul className="flex justify-center items-center py-6 space-x-6 text-sm font-semibold text-gray-800">
          <li className="flex items-center">
            <a href="#">HOME</a>
            <span className="mx-3 text-gray-400">|</span>
          </li>
          <li className="flex items-center">
            <a href="#">BOOKS</a>
            <span className="mx-3 text-gray-400">|</span>
          </li>
          <li className="flex items-center">
            <a href="#">ABOUT MALCOLM</a>
            <span className="mx-3 text-gray-400">|</span>
          </li>
          <li className="flex items-center">
            <a href="#">EVENTS</a>
            <span className="mx-3 text-gray-400">|</span>
          </li>
          <li>
            <a href="#">PODCASTS</a>
          </li>
        </ul>
      </nav>

      {/* Bottom Copyright */}
      <p className="text-xs text-gray-700 mb-4">
        © 2025 Hachette Book Group |{" "}
        <a href="#" className="hover:underline">
          Terms of Use
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Contact Us
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Do Not Sell My Personal Information
        </a>
      </p>
    </footer>
  );
}
