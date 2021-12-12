export default function DemoForm() {
  return (
    <div className="max-w-3xl">
      <form action="/" method="get" className="sm:flex">
        <div className="mb-2 sm:mr-2">
          <input type="text" name="email" id="email" className="sm:px-4 w-full sm:w-80 h-12 text-center sm:text-left text-black placeholder:text-black" placeholder="Enter your email address" required></input>
        </div>
        <div>
          <input type="submit" value="Request a demo" className="btn w-full bg-blue"></input> 
        </div>
      </form>
    </div>
  )
}