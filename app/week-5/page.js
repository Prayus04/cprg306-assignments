import ItemList from "./item-list";

export default function Page() {
	return (
		<main className="p-8 bg-gray-900 min-h-screen">
			<h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>
			<ItemList />
		</main>
	);
}
