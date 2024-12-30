import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/Landing";
import { AuthPage } from "./pages/Auth";
import { GamePage } from "./pages/Game";
import { SuggestionsPage } from "./pages/Suggestions";
import QuestionGenerator from "./pages/QuestionGenerator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/signup" element={<AuthPage type="signup" />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/suggestions" element={<SuggestionsPage />} />
        <Route path="/generate_questions" element={<QuestionGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
