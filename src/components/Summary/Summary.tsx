import './Summary.css';

type SummaryData = {
    name: string
    description: string
}

export default function Summary({ summaries }: { summaries: SummaryData[] }) {
    return <div id='summary' className='flex-horizontal'>
        { summaries.map( (summary, index) => {
            return <div className={(index < (summaries.length - 1)) ? "summary-item flex-vertical summary-item-divider" : "summary-item flex-vertical"}>
                <div className='summary-item-name'>{summary.name}</div>
                <div className='summary-item-description'>{summary.description}</div>
            </div>
        })}
    </div>
}