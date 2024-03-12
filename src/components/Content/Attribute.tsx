import "./Attribute.css"

import { AttributeCategory, AttributeCategoryData } from './AttributeCategory'

export type AttributeData = {
    name: string
    categories: AttributeCategoryData[]
}

export function Attribute (
{
    attribute
}: {
    attribute: AttributeData
}) {
    return <div className='attribute'>
        <div className='attribute-title'>{ attribute.name }</div>
        { attribute.categories.map(category => {
            return <AttributeCategory category={ category } />
        })}
    </div>
}