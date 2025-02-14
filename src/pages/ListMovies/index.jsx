import { Container } from "react-bootstrap";
import Movies from "../../components/Movies";
import "./styles.scss";

export const ListMovies = () => {
  return (
    <>
      <Container className="grid-movies">
        <Movies />
      </Container>
    </>
  );
};

export default ListMovies;
