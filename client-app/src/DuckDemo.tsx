import DuckItem from "./DuckItem";
import { ducks } from "./demo";

const DuckDemo = () => {
  return (
    <>
      {ducks.map(duck => (
        <DuckItem key={duck.name} duck={duck} />
      ))}
    </>
  )
}

export default DuckDemo;