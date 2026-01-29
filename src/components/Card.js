import './Card.css';

export function Card() {

    const links = ["GitHub", "LeetCode", "LinkedIn", "Resume"];

    return (
        <div className="card-holder">
            <div className="card">
                <div className='cardCenter'>
                    <h1>Landon Duba</h1>
                    <h2>landonduba@vt.edu</h2>
                </div>
                <div className='links'>
                    {links.map((link) => 
                        (<p>{link}</p>)
                    )}
                </div>
            </div>
        </div>
    );
}