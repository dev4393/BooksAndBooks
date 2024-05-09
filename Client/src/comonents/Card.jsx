const Card = ({item}) => {
  return (
<div className="shadow-xl card w-96 bg-base-100 h-[80vh]">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="justify-between card-actions">
      <div className="py-4 badge badge-outline">{item.category}</div> 
      <div className="p-4 badge badge-outline">${item.price}</div>
      <div className="py-4 cursor-pointer hover:bg-pink-700 badge badge-outline hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
  )
}

export default Card