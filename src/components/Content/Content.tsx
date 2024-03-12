import './Content.css';

import { Attribute, AttributeData } from "./Attribute"
import { Activity, ActivityData } from "./Activity"


export default function Content (
    {
        attributes,
        activities
    }: {
        attributes: AttributeData[],
        activities: ActivityData[]
    }) {
    return <div id='content' className='flex-horizontal'>
        <div id='content-left'>
            { attributes.map(attribute => {
                return <Attribute attribute={attribute} />
            })}
        </div>

        <div id='content-divider'></div>

        <div id='content-right'>
            { activities.map(activity => {
                return <Activity activity={activity} />
            })}
        </div>
    </div>
}
