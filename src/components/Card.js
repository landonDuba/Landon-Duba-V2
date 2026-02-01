import './Card.css';

export function Card() {

    const links = [
        {name: "GitHub", link: "https://github.com/landonDuba"},
        {name: "LeetCode", link: "https://leetcode.com/u/LandonDuba/"}, 
        {name: "LinkedIn", link: "https://www.linkedin.com/in/landonduba/"}, 
        {name: "Resume", link: "/resume.pdf"}
    ];

    return (
        <div className="card-holder">
            <div className="card">
                <div className='cardCenter'>
                    <h1>Landon Duba</h1>
                    <h2>landonduba@vt.edu</h2>
                </div>
                <div className='links'>
                    {links.map((link) => 
                        (<a href={link.link} target="_blank" rel="noopener noreferrer" >{link.name}</a>)
                    )}
                </div>
            </div>
        </div>
    );
}