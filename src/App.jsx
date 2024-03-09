import PageTitle from "./components/ui/PageTitle"
import { FaReact } from "react-icons/fa6";

function App() {
  return (
    <>
      <PageTitle title={`React.js | Starter Template`}/>
      <div>
        <h3 className="text-center py-4 px-3 font-bold">
          Welcome to React.js Starter Template
          <div className="all-center pt-10">
            <FaReact className="text-blue-500" size={70}/>
          </div>
        </h3>
        <hr />
      </div>
    </>
  )
}

export default App
