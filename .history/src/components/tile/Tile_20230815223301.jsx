/* eslint-disable react/prop-types */
export const Tile = ({ name, description }) => {
    return (
        <div className="tile-container">
            <p className="tile-title">{name}</p>
            {
                Object.values(description).map((desc, i) => (
                    <p className="tile" key={i}>{desc}</p>
                ))
            }
        </div>
    )
}