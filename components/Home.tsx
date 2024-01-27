interface MenuItemProps {
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text }) => (
  <li className="mb-4 last:mb-0">
    <button className="text-white text-lg font-semibold tracking-wide uppercase focus:outline-none">
      {text}
    </button>
  </li>
);

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background image */}
      <img
        src="/background-home.jpeg" // Replace with your actual image path
        alt="Background"
        className="w-50 h-full object-cover"
      />
      {/* Menu Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <ul className="text-center">
          <MenuItem text="Guide Me" />
          <MenuItem text="Profile Connection" />
          <MenuItem text="About The App" />
        </ul>
      </div>
    </div>
  );
};

export default Home;
