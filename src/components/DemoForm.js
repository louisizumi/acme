export default function DemoForm() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-4 text-4xl lg:text-5xl xl:text-7xl font-semibold">Vel quis feugiat pharetra diam viverra quis.</h1>
      <p className="mb-8 font-light lg:text-xl lg:font-light">Interdum enim platea sagittis vitae vitae. Odio adipiscing odio enim pharetra lorem ut sagittis nibh enim. Posuere.</p>
      <form action="/" method="post" className="sm:flex">
        <div className="mb-2 sm:mr-2 sm:">
          <input type="text" name="email" id="email" className="sm:px-4 w-full sm:w-80 h-12 text-center sm:text-left placeholder:text-black" placeholder="Enter your email address" required></input>
        </div>
        <div>
          <input type="submit" value="Request a demo" className="btn w-full h-12 bg-blue"></input> 
        </div>
      </form>
    </div>
  )
}