import Image from "next/image";

interface MenuItemProps {
  text: string;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, ...props }) => (
  <li className="mb-4 last:mb-0">
    <a
      className="text-white text-lg font-semibold tracking-wide uppercase focus:outline-none"
      {...props}
    >
      {text}
    </a>
  </li>
);

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background image */}
      <Image
        height="200"
        width="200"
        src="/background-home.jpeg" // Replace with your actual image path
        alt="Background"
        className="w-50 h-full object-cover"
      />
      {/* Menu Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <ul className="text-center">
          <MenuItem text="Guide Me" />
          <MenuItem text="Profile Connection" />
          <MenuItem text="About The App" href="/about" />
        </ul>
      </div>
    </div>
  );
};

export default Home;
