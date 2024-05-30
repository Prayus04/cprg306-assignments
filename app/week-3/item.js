
export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-gray-800 text-white p-4 rounded-lg mb-4">
        <div className="font-bold text-lg">{name}</div>
        <div className="text-sm">Buy {quantity} in {category}</div>
      </li>
    );
  }
  