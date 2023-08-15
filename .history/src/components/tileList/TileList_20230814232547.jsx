/* eslint-disable react/prop-types */
import { Tile } from '../tile/Tile';

import './TileList.css';

export const TileList = ({ contacts, appointments }) => {
    const data = contacts ? contacts : appointments;

    return (
        <div className="tile-list">
            <div>Contacts:</div>
            {
                data &&
                    data.map((object, index) => {
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