import React from "react";
import Resume from "./Resume";
import ExportResume from "./ExportResume";

function App() {
  return (
    <div>
      <Resume />
      <ExportResume resumeContent={<Resume />} />
    </div>
  );
}

export default App;
