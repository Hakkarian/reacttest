import { CardsList } from "components/CardsList/CardsList"
import { Title } from "components/Title/Title";
import data from '../../data.json';
import { Container } from "./App.styled";

export const App = () => {
    return <Container>
        <Title title="Our conversation" />
        <CardsList items={data}/>
    </Container>
}