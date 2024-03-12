import { ActivityEraEvent, ActivityEraEventData } from './ActivityEraEvent'

export type ActivityEraData = {
    name: string,
    events: ActivityEraEventData[]
}

export function ActivityEra (
{
    era
}: {
    era: ActivityEraData
}) { return <div className='activity-era'>
        <div className='activity-era-title'>
            { era.name }
        </div>
        { era.events.map(event => {
            return <ActivityEraEvent event={ event }/>
        })}
    </div>
}
