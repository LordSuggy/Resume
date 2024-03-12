import './Activity.css'

import { ActivityEra, ActivityEraData } from './ActivityEra'

export type ActivityData = {
    name: string
    eras: ActivityEraData[]
}

export function Activity (
{
    activity
}: {
    activity: ActivityData
}) { return <div className='activity'>
        <div className='activity-title'>{ activity.name }</div>
        { activity.eras.map( era => {
            return <ActivityEra era={ era } />
        })}
    </div>
}