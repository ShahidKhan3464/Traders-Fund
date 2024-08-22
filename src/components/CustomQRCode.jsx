import React from "react";
import QRCode from "react-qr-code";

const CustomQRCode = ({value}) => {


    return (
        <div className="w-[120px]">
            <QRCode
                size={256}
                style={{height: "auto", maxWidth: "100%", width: "100%"}}
                value={value}
                viewBox={`0 0 256 256`}
            />
        </div>
    );
};

export default CustomQRCode;