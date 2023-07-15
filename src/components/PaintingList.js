import Painting from "./Painting";
import PropTypes from 'prop-types';

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
};

PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}

export default PaintingList;