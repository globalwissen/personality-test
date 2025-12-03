import { useNavigate } from "react-router-dom";
import TestPage from "../page/Testpage";

export default function TestWrapper() {
  const navigate = useNavigate();

  return (
    <TestPage
      onComplete={(answers) => {
        sessionStorage.setItem("testAnswers", JSON.stringify(answers));
        navigate("/results");
      }}
    />
  );
}
