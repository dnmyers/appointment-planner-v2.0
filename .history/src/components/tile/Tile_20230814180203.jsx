import PropTypes from 'prop-types';

export const Tile = ({ name, description }) => {
    const desc = Object.values(description);
    console.log("🚀 ~ file: Tile.jsx:5 ~ Tile ~ desc:", desc)

    return (
        <div className="tile-container">
            <p className="tile-title">{name}</p>
            {
                desc.map((description, i) => (
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