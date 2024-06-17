"use client";

import { useState } from "react";

export default function NewItem() {
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [category, setCategory] = useState("produce");

	const handleSubmit = (event) => {
		event.preventDefault();
		const item = { name, quantity, category };
		console.log(item);
		alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
		setName("");
		setQuantity(1);
		setCategory("Produce");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="p-4 space-y-4 bg-gray-900 rounded-lg shadow-lg w-80 mx-auto"
		>
			<div>
				<label className="block text-sm font-medium text-gray-400">
					Item Name
				</label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm p-2 bg-gray-800 text-gray-200"
				/>
			</div>
			<div>
				<label>Quantity</label>
				<input
					type="number"
					value={quantity}
					onChange={(e) => setQuantity(Number(e.target.value))}
					min="1"
					max="99"
					required
					className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 bg-gray-800 text-gray-200"
				/>
			</div>
			<div>
				<label>Category</label>
				<select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 bg-gray-800 text-gray-200"
				>
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Bakery">Bakery</option>
					<option value="Meat">Meat</option>
					<option value="Frozen Foods">Frozen Foods</option>
					<option value="Canned Goods">Canned Goods</option>
					<option value="Dry Goods">Dry Goods</option>
					<option value="Beverages">Beverages</option>
					<option value="Snacks">Snacks</option>
					<option value="Household">Household</option>
					<option value="Other">Other</option>
				</select>
			</div>
			<div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 px-4border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-700 flex items-center justify-center"
				>
					+
				</button>
			</div>
		</form>
	);
}
