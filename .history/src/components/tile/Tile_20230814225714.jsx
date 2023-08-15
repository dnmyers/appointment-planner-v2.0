/* eslint-disable react/prop-types */
export const Tile = ({ name, ...description }) => {
    console.log("🚀 ~ file: Tile.jsx:5 ~ Tile ~ desc:", description)

    return (
        <div className="tile-container">
            <p className="tile-title">{name}</p>
            {
                description.map((desc, i) => (
                    <p className="tile" key={i}>{desc}</p>
                ))
            }
        </div>
    )
}