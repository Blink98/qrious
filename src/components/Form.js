import { useEffect, useState } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";

const theme = createTheme();
// const useStyles = makeStyles({
// 	textarea: {
// 		resize: "both",
// 	},
// });

const Form = () => {
	// const classes = useStyles();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
    const productDetails = {
			manufacturer: data.get("manufacturer"),
			name: data.get("name"),
			uid: data.get("uid"),
			description: data.get("description"),
		}
		// eslint-disable-next-line no-console
		console.log("productDetails>>>", productDetails);
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				{/* <CssBaseline /> */}
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
							id="uid"
							label="Product ID"
							name="uid"
							autoComplete="uid"
							autoFocus
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
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Submit
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Form;
