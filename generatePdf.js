const fs = require("fs");
const puppeteer = require("puppeteer");

const generatePdf = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <style>
          @page {
            size: A4;
            margin: 0;
          }
          .page {
            width: 200mm;
            height: 280mm;
            position: relative;
            background: #fff;
          }
          .line {
            position: absolute;
            border: 1px solid #000;
            box-sizing: border-box;
          }
          .line-horizontal {
            width: 100%;
            height: 1px;
          }
          .line-vertical {
            width: 1px;
            height: 400px;
          }
          .line-vertical-tall {
            height: 500px;
          }
          .line-vertical-short {
            height: 92px;
          }
          .flex-container {
            display: flex;
            flex-direction: row;
          }
          .flex-container.column {
            flex-direction: column;
          }
          .flex-item {
            padding: 0 10px;
          }
          .text-end {
            text-align: end;
          }
          p {
            margin: 0;
            margin-left: 10px;
          }
          span {
            font-family: "Courier New", Courier, monospace;
            font-size: small;
          }
          .margin-top-10 {
            margin-top: 10px;
          }
          .margin-top-12 {
            margin-top: 12px;
          }
          .margin-top-7 {
            margin-top: 7px;
          }
          .margin-top-20 {
            margin-top: 20px;
          }
          .margin-left-100 {
            margin-left: 100px;
          }
          .margin-left-15 {
            margin-left: 15px;
          }
          .margin-left-255 {
            margin-left: 255px;
          }
          .margin-left-50 {
            margin-left: 50px;
          }
          .margin-left-80 {
            margin-left: 80px;
          }
          .margin-left-20 {
            margin-left: 20px;
          }
          .margin-left-40 {
            margin-left: 40px;
          }
          .margin-right-10 {
            margin-right: 10px;
          }
          .margin-left-380 {
            margin-left: 380px;
          }
          .margin-left-480 {
            margin-left: 480px;
          }
        </style>
      </head>
      <body>
        <div class="page">
          <div
            class="line line-horizontal"
            style="top: 0; left: 0"
          >
            <p class="margin-top-10">
              <span
                >RECIBO DE PAGAMENTO DE SALÁRIO - 001.001 - EMPRESA DE TRANSPORTES E
                TURISMO CARAPICUIBA LTDA.</span
              >
            </p>
            <p><span>CNPJ: 73.056.459/0001-80 - PERÍODO: 01/2024</span></p>
          </div>
          <div
            class="line line-horizontal"
            style="top: 60px; left: 0"
          >
            <p class="margin-top-7"><span>Código - Nome do funcionário</span></p>
            <p>
              <span>000759 - Wilson Dias de Castro</span>
              <span class="margin-left-50">0013981990870</span>
              <span class="margin-left-80">Cobrador</span>
            </p>
          </div>
          <div
            class="line line-horizontal"
            style="top: 110px; left: 0"
          >
            <p class="margin-top-7">
              <span>COD.</span>
              <span class="margin-left-15">DESCRIÇÃO</span>
              <span class="margin-left-255">REF.</span>
              <span class="margin-left-50">VENCIMENTOS</span>
              <span class="margin-left-80">DESCONTOS</span>
            </p>
          </div>
          <div
            class="line line-horizontal"
            style="top: 140px; left: 0"
          ></div>
          <div style="top: 145px; position: absolute">
            <!-- Detalhamento do holerite -->
            <div class="flex-container">
              <div
                class="flex-item"
                style="width: 30px"
              >
                <span>002</span>
              </div>
              <div
                class="flex-item"
                style="width: 300px"
              >
                <span>HORAS NORMAIS</span>
              </div>
              <div
                class="flex-item text-end"
                style="width: 50px"
              >
                <span>168,40</span>
              </div>
              <div
                class="flex-item text-end"
                style="width: 130px"
              >
                <span>1.534,87</span>
              </div>
              <div
                class="flex-item text-end"
                style="width: 140px"
              >
                <span>1.534,87</span>
              </div>
            </div>
            <!-- ------------------------ -->
          </div>
          <div
            class="line line-horizontal"
            style="top: 540px; left: 0"
          >
            <div class="flex-container">
              <div
                class="flex-item flex-container column margin-top-10"
                style="width: 420px"
              >
                <span>SUA REMUNERAÇÃO É ASSUNTO CONFIDENCIAL!</span>
                <span>EVITE A QUEBRA DE SIGILO.</span>
              </div>
              <div
                class="flex-item text-end margin-right-10"
                style="width: 150px"
              >
                <span>TOTAL VENCIMENTOS</span>
                <span>2.918,08</span>
              </div>
              <div
                class="flex-item text-end"
                style="width: 150px"
              >
                <span>TOTAL DESCONTOS</span>
                <span>1.131,08</span>
              </div>
            </div>
          </div>
          <div
            class="line line-horizontal"
            style="top: 590px; left: 430px; width: 325px"
          >
            <div class="flex-container">
              <div
                class="flex-item text-end margin-top-12"
                style="width: 140px"
              >
                <span>VALOR LÍQUIDO ->></span>
              </div>
              <div
                class="flex-item text-end margin-top-12"
                style="width: 145px"
              >
                <span style="font-size: medium">1.787,00</span>
              </div>
            </div>
          </div>
          <div
            class="line line-horizontal"
            style="top: 640px; left: 0"
          >
            <div class="flex-container">
              <div
                class="flex-item text-end"
                style="width: 130px"
              >
                <span>SALÁRIO BASE</span>
                <span>1.787,00</span>
              </div>
              <div
                class="flex-item text-end"
                style="width: 130px"
              >
                <span>BASE INSS</span>
                <span>1.787,00</span>
              </div>
              <div
                class="flex-item text-end"
                style="width: 140px"
              >
                <span>BASE CALC FGTS</span>
                <span>1.787,00</span>
              </div>
              <div
                class="flex-item text-end"
                style="width: 130px"
              >
                <span>FGTS DO MÊS</span>
                <span>1.787,00</span>
              </div>
              <div
                class="flex-item text-end"
                style="width: 130px"
              >
                <span>BASE CALC IRF</span>
                <span>1.787,00</span>
              </div>
              <div
                class="flex-item text-end"
                style="width: 130px"
              >
                <span>FAIXA DO IRRF</span>
                <span>7,50</span>
              </div>
            </div>
          </div>
          <div
            class="line line-horizontal"
            style="top: 690px; left: 0"
          ></div>
          <div
            class="line line-horizontal"
            style="top: 710px; left: 0"
          >
            <p class="margin-top-10">
              <span
                >DECLARO TER RECEBIDO A IMPORTÂNCIA DISCRIMINADA NESTE RECIBO</span
              >
            </p>
            <p class="margin-top-20">
              <span class="margin-left-20">06/02/2024</span>
              <span class="margin-left-380">______________________________</span>
            </p>
            <p>
              <span class="margin-left-40">DATA</span>
              <span class="margin-left-480">ASSINATURA</span>
            </p>
          </div>
          <div
            class="line line-horizontal"
            style="top: 800px; left: 0"
          ></div>
          <div
            class="line line-vertical"
            style="top: 140px; left: 50px"
          ></div>
          <div
            class="line line-vertical"
            style="top: 140px; left: 370px"
          ></div>
          <div
            class="line line-vertical line-vertical-tall"
            style="top: 140px; left: 430px"
          ></div>
          <div
            class="line line-vertical line-vertical-tall"
            style="top: 140px; left: 590px"
          ></div>
          <div
            class="line line-vertical line-vertical-short"
            style="top: 710px; left: 0"
          ></div>
          <div
            class="line line-vertical line-vertical-short"
            style="top: 710px; left: 100%"
          ></div>
        </div>
      </body>
    </html>
    `;

    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();

    fs.writeFileSync("output.pdf", pdfBuffer);
  } catch (error) {
    console.error("Erro ao ler o arquivo:", error);
  }
};

generatePdf();
