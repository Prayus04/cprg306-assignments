"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
	const [sortBy, setSortBy] = useState("name");

	const sortedItems = [...items].sort((a, b) => {
		if (sortBy === "name") {
			return a.name.localeCompare(b.name);
		} else if (sortBy === "category") {
			return a.category.localeCompare(b.category);
		}
	});

	return (
		<div>
			<div>
				<button
					className={`px-4 py-2 ${
						sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
					}`}
					onClick={() => setSortBy("name")}
				>
					Sort by Name
				</button>
				<button
					className={`px-4 py-2 ${
						sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
					}`}
					onClick={() => setSortBy("category")}
				>
					Sort by Category
				</button>
			</div>
			<ul className="space-y-4">
				{sortedItems.map((item) => (
					<Item key={item.id} {...item} />
				))}
			</ul>
		</div>
	);
}
