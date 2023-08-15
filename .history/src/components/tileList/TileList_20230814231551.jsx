/* eslint-disable react/prop-types */
import { Tile } from '../tile/Tile';

import './TileList.css';

export const TileList = (props) => {
    console.log("TileList - data: " + JSON.stringify(contacts));

    return (
        <div className="tile-list">
            <div>Contacts:</div>
            {
                props &&
                    props.map((object, index) => {
                        const { name, ...description } = object;
                        console.log("🚀 ~ file: TileList.jsx:13 ~ data.map ~ object:", object);
                        console.log("🚀 ~ file: TileList.jsx:13 ~ data.map ~ description:", description);
                        console.log("🚀 ~ file: TileList.jsx:13 ~ data.map ~ name:", name);

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