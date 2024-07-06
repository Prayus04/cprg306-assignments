"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
	const [items, setItems] = useState(itemsData);

	const handleAddItem = (NewItem) => {
		setItems([...items, NewItem]);
	};

	return (
		<main className="p-8 bg-gray-900 min-h-screen">
			<h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>

			<NewItem OnAddItem={handleAddItem} />

			<ItemList items={items} />
		</main>
	);
}
