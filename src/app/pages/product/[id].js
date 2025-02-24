import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = {
    1: { name: "Laptop", price: "$999", description: "A powerful laptop for work and gaming.", image: "/laptop.jpg" },
    2: { name: "Phone", price: "$599", description: "A sleek smartphone with great features.", image: "/phone.jpg" },
  }[id];

  if (!product) return <Layout><p>Product not found.</p></Layout>;

  return (
    <Layout>
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center">
        <img src={product.image} alt={product.name} className="w-1/2 h-64 object-cover rounded-lg" />
        <div className="md:ml-6">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-xl text-blue-600 font-bold">{product.price}</p>
          <p className="mt-2">{product.description}</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
}
