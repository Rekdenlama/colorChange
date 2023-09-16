
const Content = ({input}) => {

  return (
    <main>
       <section
            className="rectangle"
            style={{backgroundColor :input}}>
       <p>{input?input :"Empty value"}</p>
        </section>
       
    </main>
  )
}

export default Content