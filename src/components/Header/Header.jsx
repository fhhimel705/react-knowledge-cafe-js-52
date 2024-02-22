import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex border-b-2 justify-between items-center my-8">
      <h3 className="text-4xl font-semibold">Knowledge Cafe</h3>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
