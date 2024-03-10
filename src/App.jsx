import PageTitle from "./components/ui/PageTitle"
import { FaReact } from "react-icons/fa6";

function App() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <PageTitle title={`React.js | Starter Template`} />
      <div className="all-center items-center min-h-screen">
        <div>
          <h3 className="text-center py-4 px-3 font-bold">
            Welcome to React.js Starter Template
            <div className="all-center pt-10">
              <FaReact className="text-blue-500" size={70} />
            </div>
          </h3>
          <hr />
          <div className="text-center">
            Developed by <a href="https://www.linkedin.com/in/minhazulabedinmunna/" target="_blank" className="underline text-blue-600">Minhazul Abedin Munna</a> {year}&copy;
          </div>
          <div className="text-center">
            Visit Website: <a href="https://www.techzaint.com/in/minhazulabedinmunna/" target="_blank" className="underline text-blue-600">Tech Zaint</a>;
          </div>
        </div>
      </div>
    </>
  )
}

export default App
