import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import html2pdf from "html2pdf.js";

function ExportResume({ resumeContent }) {
  // Export to DOCX
  const exportToDocx = () => {
    const htmlString = renderToStaticMarkup(resumeContent);
    const docBlob = new Blob(
      [
        `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
          <head><title>Resume</title></head>
          <body>
            ${htmlString}
          </body>
        </html>
      `,
      ],
      {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(docBlob);
    link.download = "Resume.docx";
    link.click();
  };

  // Export to PDF
  const exportToPdf = () => {
    const element = document.createElement("div");
    element.innerHTML = renderToStaticMarkup(resumeContent);

    const options = {
      margin: 0,
      filename: "Resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="mt-8 flex gap-4">
      <button onClick={exportToDocx} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Export as DOCX
      </button>
      <button onClick={exportToPdf} className="px-4 py-2 bg-green-500 text-white rounded-lg">
        Export as PDF
      </button>
    </div>
  );
}

export default ExportResume;
