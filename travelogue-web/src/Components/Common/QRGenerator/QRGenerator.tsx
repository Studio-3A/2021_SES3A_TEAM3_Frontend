import React from "react";
import QRCode from "qrcode.react";

interface IImageSettings {
    src: string,
    x?: number,
    y?: number,
    height?: number,
    width?: number,
    excavate?: boolean
}

interface IQRGenerator {
    value: string,
    renderAs?: "canvas" | "svg",
    size?: number,
    bgColor?: string,
    fgColor?: string,
    level?: "L" | "M" | "Q" | "H",
    includeMargin?: boolean,
    imageSettings?: IImageSettings
}

const QRGenerator = ({value, renderAs, size, bgColor, fgColor, level, includeMargin, imageSettings}: IQRGenerator) => {
    return (
        <QRCode value={value} renderAs={renderAs} size={size} bgColor={bgColor} fgColor={fgColor} level={level} includeMargin={includeMargin} imageSettings={imageSettings}/>
    )
}

export default QRGenerator;