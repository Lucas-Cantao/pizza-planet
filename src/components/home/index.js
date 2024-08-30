import Menu from "./menu";
import Cards from "./cards";
import CardsMaiores from "./cardsMaiores";
import CarrocelPizzas from './carrocelPizzas'

export default function Home(){
    return (
        <div>
            <Menu/>
            <Cards/>
            <CardsMaiores/>
            <CarrocelPizzas/>
        </div>
    )
}