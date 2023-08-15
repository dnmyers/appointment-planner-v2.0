/* eslint-disable react/prop-types */
export const Tile = ({ name, description }) => {
    console.log("🚀 ~ file: Tile.jsx:5 ~ Tile ~ desc:", description)
    const descriptionArray = Object.values(description);

    return (
        <div className="tile-container">
            <p className="tile-title">{name}</p>
            {
                descriptionArray.map((desc, i) => (
                    <p className="tile" key={i}>{desc}</p>
                ))
            }
        </div>
    )
}