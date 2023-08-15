/* eslint-disable react/prop-types */
import { Tile } from '../tile/Tile';

export const TileList = ({ data }) => {
    console.log("TileList - data: " + JSON.stringify(data));

    return (
        <div className="tile-list">
            {
                data &&
                    data.map((object, index) => {
                        const { name, description } = object;

                        console.log("TileList - name: " + name + " | description: " + description);
                        return (
                            <Tile
                                key={index}
                                name={name}
                                description={description}
                            />
                        );
                    })

            }
        </div>
    );
};

export default TileList;