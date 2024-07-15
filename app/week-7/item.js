export default function Item({ name, quantity, category, onSelect }) {
	return (
		<main
			className="p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-blue-400 hover:shadow-lg transition duration-300"
			onClick={onSelect}
		>
			<h1 className="font-bold text-lg">{name}</h1>
			<div className="text-sm">
				Buy {quantity} in {category}
			</div>
		</main>
	);
}
