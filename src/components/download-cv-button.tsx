"use client";

import { Button } from "./ui/button";

function DownloadCVButton() {
  const onButtonClick = () => {
    fetch("curriculo.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "curriculo.pdf";
        alink.click();
      });
    });
  };

  return (
    <Button
      onClick={onButtonClick}
      className="uppercase text-custom-white font-bold"
      size={"xl"}
      variant={"outline"}
    >
      Download CV
    </Button>
  );
}

export default DownloadCVButton;
