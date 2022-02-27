import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuidv4 } from "uuid";
import Constants from "./Constants";
import { ethers } from "ethers";
import Swal from "sweetalert2";

const theme = createTheme();

const Form = () => {
	const history = useHistory();
	const uid = uuidv4();
	const [loading, setLoading] = useState(false);

	const connectContract = async (productDetails) => {
		let abi = Constants.ABI;
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const userAddress = await signer.getAddress();
		const hasBalance = await getBalance(provider, userAddress);

		if (hasBalance) {
			const contractAddress = Constants.CONTRACT_ADDRESS;

			let contract = new ethers.Contract(contractAddress, abi, provider);
			console.log("contract>>>", contract);

			await writeToContract(provider, contract, productDetails);
		}

		return false;
	};

	const getBalance = async (provider, wallet) => {
		let balance = await provider.getBalance(wallet);
		// we use the code below to convert the balance from wei to eth
		balance = ethers.utils.formatEther(balance);

		if (balance <= 0) {
			Swal.fire({
				icon: "error",
				title: "Oops... Insufficient balance in wallet",
				html: "We recommend adding some tokens using <a href='https://faucet.polygon.technology' target='_bla'>Polygon Faucet</a>",
			});

			return false;
		}
		return true;
	};

	const writeToContract = async (provider, contract, productDetails) => {
		let privateKey = Constants.PRIVATE_KEY;
		let wallet = new ethers.Wallet(privateKey, provider);

		let contractWithSigner = contract.connect(wallet);

		// console.log("extracted>>>", ...Object.values(productDetails));

		let tx = await contractWithSigner.createProduct(
			...Object.values(productDetails)
		);

		// console.log("tx.hash>>>", tx.hash);

		await tx.wait();

		// let newValue = await contract.products(productDetails.uid);
		// console.log("newValue>>>", newValue);
	};

	const handleSubmit = async (event) => {
		setLoading(true);
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const productDetails = {
			uid: uid,
			name: data.get("name"),
			image: data.get("image"),
			description: data.get("description"),
			manufacturer: data.get("manufacturer"),
			mrp: data.get("mrp"),
		};

		const isConnected = await connectContract(productDetails);

		setLoading(false);

		if (isConnected) {
			history.push(`qrcode/${productDetails.uid}/${productDetails.name}`);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Product Details
					</Typography>
					<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="manufacturer"
							label="Manufacturer"
							name="manufacturer"
							autoComplete="manufacturer"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="name"
							label="Product Name"
							name="name"
							autoComplete="name"
							autoFocus
						/>

						<TextField
							margin="normal"
							required
							fullWidth
							id="image"
							label="Product Image URL"
							name="image"
							autoComplete="image"
							autoFocus
						/>

						<TextField
							margin="normal"
							required
							fullWidth
							id="mrp"
							label="MRP"
							name="mrp"
							autoComplete="mrp"
							autoFocus
							type="number"
						/>

						<TextField
							margin="normal"
							required
							fullWidth
							multiline
							minRows={3}
							name="description"
							label="Product Description"
							type="description"
							id="description"
						/>
						<LoadingButton
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							loading={loading}
						>
							Submit
						</LoadingButton>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Form;
