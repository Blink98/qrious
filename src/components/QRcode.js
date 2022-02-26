import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import QRcode from "qrcode.react";
import "./qrcode.css";

const QRcodeComp = () => {
	let { pid, pname } = useParams();
  const history = useHistory();

	const downloadQR = () => {
		const canvas = document.getElementById("qrCode");
		const pngUrl = canvas
			.toDataURL("image/png")
			.replace("image/png", "image/octet-stream");
		let downloadLink = document.createElement("a");
		downloadLink.href = pngUrl;
		downloadLink.download = `${pname}.png`;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);   
	};

  useEffect(() => {
    downloadQR();
    history.push("/"); 
  }, [])
  

	return (
		<div className="qrcode">
			<QRcode
				id="qrCode"
				value={pid}
				size={290}
				level={"H"}
				includeMargin={true}
			/>
		</div>
	);
};

export default QRcodeComp;
