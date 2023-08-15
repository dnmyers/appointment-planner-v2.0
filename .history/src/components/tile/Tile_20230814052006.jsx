import PropTypes from 'prop-types';

export const Tile = ({ name, ...description }) => {
    const descValues = Object.values(description);

    return (
        <div className="tile-container">
            <p className="tile-title">{name}</p>
            {
                descValues.map((description, i) => (
                    <p className="tile" key={i}>{description}</p>
                ))
            }
        </div>
    )
}

Tile.propTypes = {
    name: PropTypes.string,
    description: PropTypes.object
}