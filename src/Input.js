

const Input = ({input,setInput}) => {
  return (
      <main>
    <form action="" onSubmit={(e)=> e.preventDefault()}>
         <input 
            autoFocus
            type="text" 
            required
            placeholder="Add Color Name"
            id="color"
            onChange={(e)=> setInput(e.target.value)}
          />
       </form>
       </main>
  )
}

export default Input