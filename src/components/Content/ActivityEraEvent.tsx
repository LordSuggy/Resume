export type ActivityEraEventData = {
    timeframe: string
    position: string
    description: string
}
export function ActivityEraEvent (
{
    event
}: {
    event: ActivityEraEventData
}) { 
    return <div className='activity-era-event'>
        <div className='activity-era-event-timeframe'>
            { event.timeframe }
            <div className='activity-era-event-position'>
                { event.position }
            </div>
        </div>
        { event.description && // Only render this if we have the description
            <div className='activity-era-event-description'>
                { event.description }
            </div>
        }
    </div>
}
