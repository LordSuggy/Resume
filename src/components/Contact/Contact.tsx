import './Contact.css';
import ContactItem from './ContactItem';

type ContactItemData = {
    name: string
    icon: string
    description: string
}

export default function Contact({items}:{items: ContactItemData[]}) {
    return <div id='contact' className='flex-horizontal'>
        { items.map(item => {
            return <ContactItem icon={item.icon} description={item.description} />
        })}
    </div>
}