import '../Home';
import './Header.css';

interface State {
  name?: string;
}

function Header(props: State) {
  return (
    <div className='headerDiv'>
      <h6 className='header-text1'>
        Hey{props.name !== '' ? ', ' + props.name : ''}!
      </h6>
      <h1 className='header-text2'>Let's make a trip for you</h1>
    </div>
  );
}

export default Header;
