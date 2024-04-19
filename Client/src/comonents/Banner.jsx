const Banner = () => {
  return (
    <div className="flex flex-col px-4 mt-2 md:px-20 max-w-screen-2xl md:flex-row">
    <div className="w-full space-y-8 md:w-1/2">
        <h1 className="text-3xl font-bold text-justify">Hello, Welcome to learn something <span className="text-pink-500">new Everyday!!!</span></h1>
    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellat, assumenda cum consectetur modi, doloribus iste iusto, nihil quis vero neque provident eius quaerat sequi. Eius omnis in culpa odit ad animi quas assumenda.</p>
    <label className="flex items-center gap-2 bordered input input-">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Username" />
</label>
<button className="btn btn-secondary">Secondary</button>
    </div>
    <div className="w-full md:w-1/2">
<div className="flex">
<div className="w-1/2">a</div>
<div className="w-1/4">b</div>
<div className="w-1/4" >c</div>
</div>
    </div>
    </div>
  )
}

export default Banner