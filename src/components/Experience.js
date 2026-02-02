import './Experience.css'

export function Experience({exps}) {
    return (
        <div className='experience'>
            <img src={exps.pic} alt="company/school logo"></img>
            <div className='inner'>
                <h4>{exps.name}</h4>
                <h3>{exps.title}</h3>
                <h5>{exps.date}</h5>
            </div>
        </div>
    )
}