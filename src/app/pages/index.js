import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  const products = [
    { id: 1, name: "Laptop", price: "$999", image: "/laptop.jpg" },
    { id: 2, name: "Phone", price: "$599", image: "/phone.jpg" },
  ];

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="border p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-blue-600 font-bold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
