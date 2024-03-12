export default function ContactItem({icon, description} : { icon: any, description: string}) {
    return <div className='contact-item flex-vertical'>
        <i className={`contact-item-icon ${icon}`} ></i>
        <div className={`contact-item-description`}>{description}</div>
    </div>
}
