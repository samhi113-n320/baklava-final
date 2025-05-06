import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

class GeneratePdf {
    // pdfDoc will hold an instance of jsDPF (our PDF Document)
    pdfDoc; 
    // Position used for controlling where elements are on the pdf
    position = {
        x: 10,
        y: 20,
    }
    // Margin used for adding fluff away from page borders
    margin = {
        x: 10,
        y: 20,
    }
    // Page counter used for tracking how many pages exist in the pdf
    pageCounter = 1;
    // Dom ref is used to be able to update teh DOM with the pdf
    domRef = "";

    amountCorrect = 0;

    quizText = "";

    name = "";

    qCheck1(){
        if(!document.getElementById("nAnswer1").checked && !document.getElementById("nAnswer2").checked && !document.getElementById("nAnswer3").checked && !document.getElementById("nAnswer4").checked){
            return false;
        } else if(document.getElementById('nAnswer1').checked){
            this.amountCorrect ++;
            return true;
        }
    }

    qCheck2(){
        if(!document.getElementById("nAnswer5").checked && !document.getElementById("nAnswer6").checked && !document.getElementById("nAnswer7").checked && !document.getElementById("nAnswer8").checked){
            return false;
        } else if(document.getElementById('nAnswer8').checked){
            this.amountCorrect ++;
            return true;
        }
    }

    qCheck3(){
        if(!document.getElementById("nAnswer9").checked && !document.getElementById("nAnswer10").checked && !document.getElementById("nAnswer11").checked && !document.getElementById("nAnswer12").checked){
            return false;
        } else if(document.getElementById('nAnswer11').checked){
            this.amountCorrect ++;
            return true;
        }
    }

    qCheck4(){
        if(!document.getElementById("nAnswer13").checked && !document.getElementById("nAnswer14").checked && !document.getElementById("nAnswer15").checked && !document.getElementById("nAnswer16").checked){
            return false;
        } else if(document.getElementById('nAnswer16').checked){
            this.amountCorrect ++;
            return true;
        }
    }

    qCheck5(){
        if(!document.getElementById("nAnswer17").checked && !document.getElementById("nAnswer18").checked && !document.getElementById("nAnswer19").checked && !document.getElementById("nAnswer20").checked){
            return false;
        } else if(document.getElementById('nAnswer18').checked){
            this.amountCorrect ++;
            return true;
        }
    }

    finalCheck(){
        if(this.qCheck1() == false || this.qCheck2() == false || this.qCheck3() == false || this.qCheck4() == false || this.qCheck5() == false){
            return false;
        } else {
            if(this.amountCorrect > 5){
                this.amountCorrect = 0;
            }

            this.qCheck1();
            this.qCheck2();
            this.qCheck3();
            this.qCheck4();
            this.qCheck5();
    
            if(this.amountCorrect == 5){
                this.quizText = "Congratulations! You got all of the questions correct."
            } else if(this.amountCorrect == 4){
                this.quizText = "So close! You got the majority of the questions correct."
            } else {
                this.quizText = "Womp Womp! Are you sure you read the previous page? You did not do well on the quiz."
            }

            return true;
        }
    }

    /**
     * 
     * @param {string} domRefId The id of the iframe used for rendering the pdf
     */
    constructor(domRefId){
        this.pdfDoc = new jsPDF();
        this.pdfDoc.setFontSize(11);
        if(domRefId){
            this.domRef = document.querySelector(`#${domRefId}`);
        }
    }

    /**
     * @description Used to download the pdf onto the client's device
     */
    downloadPdf(){
        this.pdfDoc.save(`invoice${this.invoiceNumber}.pdf`);
    }

    /**
     * 
     * @returns A string value with a domain local url for the pdf
     */
    getPdfUrl(){
        return this.pdfDoc.output("bloburl") + "#toolbar=1";
    }

    /**
     * 
     * @param {string} text Content displayed in header
     * @param {string} color Adds color to the text
     */
    addHeader(text, color = "black"){
        this.pdfDoc.setFontSize(16);
        this.pdfDoc.setTextColor(color);
        this.pdfDoc.text(text, 100, this.position.y, 'center');
        this.pdfDoc.setFontSize(11);
        this.position.y += 8;
        this.pdfDoc.setTextColor("black");
    }

    /**
     * 
     * @param {string} text Content for the paragraph
     * @param {string} text Adds color to the text
     */
    addText(text, color = "black"){
        this.pdfDoc.setTextColor(color);
        this.pdfDoc.text(text, 100, this. position.y, 'center');
        this.position.y += 5.5;
        this.pdfDoc.setTextColor("black");
    }

    /**
     * @description Looping through the pages from last to first then deleting them. After all pages are deleted, it resets the pageCounter and adds a new blank page.
     */
    resetPdf(){
        for(let i = this.pageCounter; i > 0; i--){
            this.pdfDoc.deletePage(i);
        }
        this.pdfDoc.deletePage(1);
        this.pdfDoc.addPage();
        
        this.showPdf();
    }

    /**
     * @description Resets the x/y position, based on the margin, then adds a new blank page, increasing the pageCounter
     */
    newPage(){
        this.position = { ...this.margin};
        this.pdfDoc.addPage();
        this.pageCounter++;
    }

    /**
     * @description Updates the dom to show the pdf in the iframe
     */
    showPdf(){
        if(this.domRef){
            this.domRef.src = this.getPdfUrl();
        }
    }

    addBackground({color = "black", fontSize = 11} = {}){
        const offset = fontSize / 2;
        // S = stroke / border of rect
        // F = fill / background of rect
        this.pdfDoc.setFillColor(color);
        this.pdfDoc.rect(this.position.x, this.position.y - ((offset * 3)/4), 100, offset, "S");
        this.pdfDoc.setFillColor("white");
    }
}

const certPDF = new GeneratePdf("certPreview");

document.getElementById("submitButton").addEventListener("click", function() {
    certPDF.name = document.getElementById("nameInput").value;
    if(!certPDF.finalCheck() || certPDF.name === ""){
        console.log(certPDF.finalCheck());
    } else {
        certPDF.finalCheck(); document.getElementById("generateButton").removeAttribute("hidden"); console.log(certPDF.amountCorrect);
    }
});

document.getElementById("generateButton").addEventListener("click", function() {
    certPDF.addHeader("Baklava's Norse Mythology Test")
    certPDF.addText("");
    certPDF.addText(`${certPDF.quizText}`)
    certPDF.addText("");
    certPDF.addText(`This certificate shows that ${certPDF.name} got`);
    certPDF.addText(`${certPDF.amountCorrect} out of 5`);
    certPDF.addText(`correct answers on this quiz`)
    certPDF.addText("");
    certPDF.addText("The team here at Baklava thank you for your time")

    certPDF.showPdf();
    document.getElementById("downloadButton").removeAttribute("hidden");
});