import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const { state } = useLocation();
  const products = state?.results || [];

  return (
    <div className="p-10 mt-20">
      <h2 className="text-2xl font-bold mb-6">Search Results</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p._id} className="border rounded-lg p-4">
              <img
                src={`http://localhost:5000/${p.image}`}
                alt={p.product_name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{p.product_name}</h3>
              <p className="text-gray-600">${p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
