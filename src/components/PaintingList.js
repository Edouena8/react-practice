import Painting from "./Painting";

function PaintingList({items}) {
    return (
        <ul>
        {items.map(({id, url, title, author, price, quantity}) => (
            <li key={id}>
                <Painting 
                    imageUrl={url} 
                    title={title} 
                    authorName={author.tag}
                    profileUrl={author.url}
                    price={price}
                    quantity={quantity}
                />
            </li>
        ))}
        </ul>
    )
}

export default PaintingList;