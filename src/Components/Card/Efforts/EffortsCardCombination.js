import React from "react";

import "antd/dist/antd.css";
import { Card } from "antd";

const EffortsOneCard = ({ title, description }) => {
    const { Meta } = Card;
    return (
        <Card
            hoverable
            style={{
                width: "100%",
                height: "auto",
                marginBottom: "30px",
                marginTop: "20px",
            }}
        >
            <Meta
                title={title}
                description={description}
            />
        </Card>
    );
};

export default EffortsOneCard;
