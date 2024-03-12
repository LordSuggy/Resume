
export type AttributeCategoryData = {
    name: string
    values: string[]
}

export function AttributeCategory (
{
    category
}: {
    category: AttributeCategoryData
}) {
    return <span>
        { category.name && // Only render this if the category has a name
            <div className='attribute-category-name'>{category.name}</div> 
        }
        { category.values.map(value => {
            return <div className='attribute-category-item'>
                { value }
            </div>
        })}
    </span>
}