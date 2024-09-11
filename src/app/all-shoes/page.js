const AllShoes = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();

  return (
    <div>
      <h2 className="text-4xl text-center">All shoes</h2>
      <div className="grid grid-cols-3 gap-4">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card bg-base-100  gap-2 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end"></div>
              <button className="btn btn-outline btn-primary">Buy Now</button>
              <button className="btn btn-outline btn-primary">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoes;
