import { useState } from "react";
import "./App.css";
import { Note } from "./models/notes.model";
import Header from "./components/Header";
import { Row, Container, Col } from "react-bootstrap";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";
function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "schedule meeting with ui ix team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
