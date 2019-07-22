#include <WebServerEx.h>
#include <DNSServer.h>
#include "constants.h"

// defs que facilitam a imp
#define INPUT_SETUP(pin) pinMode(pin, INPUT);
#define OUTPUT_SETUP(pin) pinMode(pin, OUTPUT);

IPAddress _serverIP(192, 168, 3, 4);
WebServerEx _server(_serverIP);

void onTouchBrailleRoute()
{
    const int iQuantidadeArgumentos = _server.args();

    // Barrar qualquer tentativa maior do que 10 argumentos
    if  (iQuantidadeArgumentos > MAX_ARGS)
        return;

    // Ler o argumento recebido da requisição HTTP
    const String& sComando = _server.arg("cell");

    // converter o argumento recebido para número
    const long lComando = sComando.toInt();

    // Ativar cada eletroima conforme a flag binaria enviada no argumento
    if (lComando >= 0)
    {
        digitalWrite(CELL_POINT1_PORT, lComando & ELETROIMA_1);
        digitalWrite(CELL_POINT2_PORT, lComando & ELETROIMA_2);
        digitalWrite(CELL_POINT3_PORT, lComando & ELETROIMA_3);
        digitalWrite(CELL_POINT4_PORT, lComando & ELETROIMA_4);
        digitalWrite(CELL_POINT5_PORT, lComando & ELETROIMA_5);
        digitalWrite(CELL_POINT6_PORT, lComando & ELETROIMA_6);   
    }

    // Devolver para o cliente que os dados enviados foram recebidos
    _server.send(200, "text/plain", "Dados recebidos!");
}

void setup()
{
    Serial.begin(9600);

    // Ativar as portas abaixo do ESP8266 como saída
    OUTPUT_SETUP(CELL_POINT1_PORT);
    OUTPUT_SETUP(CELL_POINT2_PORT);
    OUTPUT_SETUP(CELL_POINT3_PORT);
    OUTPUT_SETUP(CELL_POINT4_PORT);
    OUTPUT_SETUP(CELL_POINT5_PORT);
    OUTPUT_SETUP(CELL_POINT6_PORT);

    // Identificar o ponteiro de função que receberá e irá tratar os dados recebidos quando o cliente utilizar a rota TouchBraille
    _server.on("/TouchBraille", onTouchBrailleRoute);

    // Configurar o WIFI para ser do tipo Access Point e fixar o IP do servidors
    WiFi.mode(WIFI_AP_STA);
    WiFi.softAPConfig(_serverIP, _serverIP, IPAddress(255, 255, 255, 0));
    WiFi.softAP(_sAPSSID, _sPassword);

    // Iniciar o servidor para escutar as requisições
    _server.startServer();
}

void loop()
{
    // Manipular os clientes que se conectarem e realizarem requisições HTTP para o servidor.
    if (_server.isServerStarted())
        _server.handleClient();
}
