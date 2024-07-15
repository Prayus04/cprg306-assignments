"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
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
			<div className=" m-2 m ">
				<button
					className={`px-4 py-2 mr-1 ${
						sortBy === "name" ? "bg-orange-700 text-white" : "bg-orange-500"
					}`}
					onClick={() => setSortBy("name")}
				>
					Sort by Name
				</button>
				<button
					className={`px-4 py-2 ml-1 ${
						sortBy === "category" ? "bg-orange-700 text-white" : "bg-orange-500"
					}`}
					onClick={() => setSortBy("category")}
				>
					Sort by Category
				</button>
			</div>
			<ul className="space-y-4 ">
				{sortedItems.map((item) => (
					<li key={item.id} onClick={() => onItemSelect(item.name)}>
						<Item {...item} />
					</li>
				))}
			</ul>
		</div>
	);
}
