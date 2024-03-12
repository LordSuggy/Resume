import './Title.css';

function Title({logo, logoAltText, name} : {logo: any, logoAltText: string, name: string}) {
    return <div id='title'>
        <span id='title-container' className='flex-horizontal'>
            <div id='title-name'>
                {name}
            </div>
        </span>
        <img id='title-logo' src={logo} alt={logoAltText}/>
    </div>
}

export default Title;