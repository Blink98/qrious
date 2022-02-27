const Constants = {
	ABI: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "string",
					name: "prodId",
					type: "string",
				},
			],
			name: "ProductCreated",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "string",
					name: "productId",
					type: "string",
				},
			],
			name: "ProductDeleted",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "string",
					name: "prodId",
					type: "string",
				},
			],
			name: "ProductUpdated",
			type: "event",
		},
		{
			inputs: [
				{ internalType: "string", name: "_prodID", type: "string" },
				{ internalType: "string", name: "_prodName", type: "string" },
				{ internalType: "string", name: "_prodImageUrl", type: "string" },
				{ internalType: "string", name: "_description", type: "string" },
				{ internalType: "string", name: "_prodBrandNAme", type: "string" },
				{ internalType: "string", name: "_mrp", type: "string" },
			],
			name: "createProduct",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [{ internalType: "string", name: "_prodID", type: "string" }],
			name: "deleteProduct",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [{ internalType: "string", name: "", type: "string" }],
			name: "products",
			outputs: [
				{ internalType: "string", name: "id", type: "string" },
				{ internalType: "string", name: "productName", type: "string" },
				{ internalType: "string", name: "productImageUrl", type: "string" },
				{ internalType: "string", name: "description", type: "string" },
				{ internalType: "string", name: "productBrandName", type: "string" },
				{ internalType: "string", name: "mrp", type: "string" },
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "string", name: "_prodID", type: "string" },
				{ internalType: "string", name: "_prodName", type: "string" },
				{ internalType: "string", name: "_prodImageUrl", type: "string" },
				{ internalType: "string", name: "_description", type: "string" },
				{ internalType: "string", name: "_prodBrandNAme", type: "string" },
				{ internalType: "string", name: "_mrp", type: "string" },
			],
			name: "updateProduct",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
	],
};
export default Constants;
