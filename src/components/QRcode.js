import { Button, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";

import "./qrcode.css";

const qrGeneratorUrl = "http://api.qrserver.com/v1/create-qr-code";
const qrSize = 400;

const QRcode = () => {
	const [qrCode, setQrCode] = useState("");
	let { pid } = useParams();

	const getQrCode = (pid) => {
		const url = `${qrGeneratorUrl}/?data=${pid}&size=${qrSize}x${qrSize}&format=jpg`;
		setQrCode(url);
	};

  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

	useEffect(() => {
		getQrCode(pid);
	}, []);

	return (
		<div className="qrcode">
    <QRcode
    id="123456"
    value="123456"
    size={290}
    level={"H"}
    includeMargin={true}
  />
  <a onClick={downloadQR}> Download QR </a>
			{/* <img id="qrCode" src={qrCode} alt="QR Code" />
			<a href={qrCode} download="QRCode" onClick={downloadQRCode}>
				<button type="button">Download</button>
			</a>
			<Link
				href={qrCode}
				download="image"
				// component="button"
        onClick={downloadQRCode}
				variant="button"
				sx={{ mt: 3, mb: 2 }}
				Content-Disposition="attachment"
        filename="ProposedFileName.txt"
			>
				Download
			</Link> */}
		</div>
	);
};

export default QRcode;
