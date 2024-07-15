"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas.js";
import itemsData from "./items.json";

export default function Page() {
	const [items, setItems] = useState(itemsData);
	const [selectedItemName, setSelectedItemName] = useState("");

	const handleAddItem = (NewItem) => {
		setItems([...items, NewItem]);
	};

	const handleItemSelect = (selectedItemName) => {
		var emojis =
			/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

		let cleanedItemName = selectedItemName;

		if (selectedItemName.includes(",")) {
			cleanedItemName = selectedItemName.split(",")[0].trim();
		} else {
			cleanedItemName = selectedItemName.split(emojis)[0].trim();
		}

		setSelectedItemName(cleanedItemName);
	};

	return (
		<main className="p-8 bg-gray-900 min-h-screen flex flex-row">
			<div className="flex-1 flex flex-col space-y-6">
				<h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>
				<div className="w-full">
					<NewItem OnAddItem={handleAddItem} />
				</div>
				<div className="w-full">
					<ItemList items={items} onItemSelect={handleItemSelect} />
				</div>
			</div>
			<div className="w-2/5 ml-2">
				<MealIdeas ingredient={selectedItemName} />
			</div>
		</main>
	);
}
