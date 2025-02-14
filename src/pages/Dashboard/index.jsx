import { Container } from "react-bootstrap";
import { MultipleWinners } from "../../components/MultipleWinners";
import { TopStudios } from "../../components/TopStudios";
import { ProducersInterval } from "../../components/ProducersInterval";
import { WinnerByYear } from "../../components/WinnerByYear";
import "./styles.scss";

export const Dashboard = () => {
  return (
    <>
      <Container className="grid">
        <MultipleWinners />
        <TopStudios />
        <ProducersInterval />
        <WinnerByYear />
      </Container>
    </>
  );
};

export default Dashboard;
