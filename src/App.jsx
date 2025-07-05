import { useGetTaskQuery } from "./redux/features/user/userSlice"


function App() {
  const {data, isLoading} = useGetTaskQuery(undefined);
  console.log(data, isLoading);
  if(isLoading){
    <p>Loading .....</p>
  }
  
  return (
    <>
      <div>
        <div>
          <h1>Redux Intro Count</h1>
          {!isLoading && data.data.map((book) => <>
            <div key={book.id}>
                <p>{book.title}</p>
                <p>{book.author}</p>
            </div>
          </>)}
        </div>
      </div>
    </>
  )
}

export default App
