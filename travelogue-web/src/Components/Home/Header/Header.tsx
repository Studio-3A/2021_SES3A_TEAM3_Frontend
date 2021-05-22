import { Trip } from 'travelogue-utility';
import '../Home';
import './Header.css';

interface HeaderProps {
  name?: string;
  trip: Trip | undefined;
}

function Header({  name, trip  }: HeaderProps) {
  return (
    <div className='headerDiv'>
      <h6 className='header-text1'>Hey{name != null && name !== '' ? ', ' + name : ''}!</h6>
      <p className='header-text2'>{trip != null ? "Trip Generated, Bon Voyage!" : "Let's make a trip for you"}</p>
    </div>
  );
}

export default Header;
