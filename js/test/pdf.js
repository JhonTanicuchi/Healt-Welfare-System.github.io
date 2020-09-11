 /* DOC PDF ---------------------------------------------------------------------*/
  
 function genPDF() {
  (function (API) {
    API.myText = function (txt, options, x, y) {
      options = options || {};
      if (options.align == "center") {
        var fontSize = this.internal.getFontSize();
        var pageWidth = this.internal.pageSize.width;
        txtWidth =
          (this.getStringUnitWidth(txt) * fontSize) / this.internal.scaleFactor; //
        x = (pageWidth - txtWidth) / 2;
      }
      this.text(txt, x, y);
    };
  })(jsPDF.API);

  var doc = new jsPDF("p", "mm", "a4");
  
    /*IMAGEN PLANTILLA */
  
    doc.addImage(imgData, "JPEG", 0, 0, 210, 297.1);
  
    doc.setTextColor(98, 10, 114);
  
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(38.2);
    doc.text(102, 22, "TEST COVID-19");
  
    doc.setFontSize(14);
    doc.setFontType("normal");
    doc.setFont("helvetica");
    doc.text(157.5, 35.5, "FECHA: " + cerod + d + "/" + cerom + m + "/" + y);
  
    doc.setTextColor(109, 109, 109);
    doc.setFontType("normal");
    doc.setFont("helvetica");
    doc.text(181, 81, ceroh + h + ":" + ceromin + min + horario);
  
    doc.setTextColor(98, 10, 114);
    doc.setFontSize(12);
    doc.setFont("courier");
    doc.setFontType("normal");
    doc.text(146, 43, "HEALT & WELFARE SYSTEM");
  
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.text(6, 76, textoProvincia.toUpperCase());
  

    doc.setFont("courier");
    doc.setFontType("normal");

    doc.setFontSize(15);
    doc.text(6, 83, canto.toUpperCase());

    doc.setFontSize(11);
    doc.text(6, 91, pdfenunciado[10]);
  
    doc.setTextColor(98, 10, 114);
    doc.setFontSize(15.3);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.text(21, 110, "INFORMACIÓN DEL USUARIO");
  
    doc.setFontSize(11.3);
    doc.setFont("courier");
    doc.setFontType("normal");
    doc.setTextColor(109, 109, 109);
    doc.text(21, 118, "Nombre: " + nombre);
    doc.text(21, 123, "Número de cédula: " + celular);
    doc.text(21, 128, "Provincia de residencia: " + textoProvincia);
    doc.text(21, 133, "Canton de residencia: " + canto);
  
    doc.setTextColor(98, 10, 114);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(80);
    doc.myText(porcentaje + "%", { align: "center" }, 0, 178);
  
    doc.setFontSize(15.3);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.myText(textPdf, { align: "center" }, 0, 198);
    doc.myText(text2Pdf, { align: "center" }, 0, 205);
  
    doc.setFontSize(12);
    doc.setFont("courier");
    doc.setFontType("normal");
    doc.myText(pdfenunciado[6], { align: "center" }, 0, 216.5);
    doc.myText(pdfenunciado[7], { align: "center" }, 0, 221);
  
    doc.setFontSize(21);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.myText(pdfenunciado[8], { align: "center" }, 0, 240);
  
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.text(135, 285, pdfenunciado[9]);
  
    doc.save("Test COVID-19.pdf");


    setTimeout(function(){descargaCompleta() }, 1500);
     
   
  }
  
  /* FIN PDF----------------------------------------------------------------------*/