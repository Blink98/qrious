import { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { v4 as uuidv4 } from 'uuid';

const theme = createTheme();

const Form = () => {
  const history = useHistory();
  const uid = uuidv4();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
    const productDetails = {
			uid: uid,
			manufacturer: data.get("manufacturer"),
			name: data.get("name"),
			mrp: data.get("mrp"),
			description: data.get("description"),
		}
		// eslint-disable-next-line no-console
		console.log("productDetails>>>", productDetails);

    history.push(`qrcode/${productDetails.uid}/${productDetails.name}`)
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
