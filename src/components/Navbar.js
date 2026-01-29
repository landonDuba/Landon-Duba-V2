import './Navbar.css';

export function Navbar({modeSwitch}) {
    return (
        <div className='navbar'>
            <label className="switch">
                <input type="checkbox" onClick={modeSwitch}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
}