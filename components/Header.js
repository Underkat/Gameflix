const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">MMORPG</li>
          <li className="headerLink">Shooter</li>
          <li className="headerLink">MOBA</li>
          <li className="headerLink">Anime</li>
          <li className="headerLink">Strategy</li>
        </ul>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
