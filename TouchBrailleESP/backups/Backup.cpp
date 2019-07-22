/*#include <WebServerEx.h>
#include <DNSServer.h>
#include <WiFiManager.h>
#include <ESPAsyncUDP.h>
#include <ESP8266mDNS.h>

#define INPUT_SETUP(pin) pinMode(pin, INPUT);
#define OUTPUT_SETUP(pin) pinMode(pin, OUTPUT);

const char *m_sAPSSID = "TouchBraille";

const int MAX_ARGS = 10;

const int PIN_RESET_WIFI = D7;

const int CELL_POINT1 = D0;
const int CELL_POINT2 = D1;
const int CELL_POINT3 = D3;
const int CELL_POINT4 = D4;
const int CELL_POINT5 = D5;
const int CELL_POINT6 = D6;

WebServerEx m_Server;
AsyncUDP m_AsyncUDP;

void wifiSaveCallback()
{
    digitalWrite(2, LOW);
    delay(250);
    digitalWrite(2, HIGH);
    delay(250);
    digitalWrite(2, LOW);
    delay(250);
    digitalWrite(2, HIGH);
}

void handleReceivedPackets(AsyncUDPPacket packet)
{
    if (!packet.isMulticast() || packet.remoteIP() == WiFi.localIP())
        return;

    //TODO: realizar um ping para entre cliente-servidor para garantir a conexão do device.

    packet.printf("ESP 8266 IP");
}

void onClientRequest()
{
    int iQtdArgs = m_Server.args();

    if  (iQtdArgs > MAX_ARGS)
        return;

    const String& sArg = m_Server.arg("cell");

    long lValue = sArg.toInt();

    m_Server.send(200, "text/plain", "Received");

    if (lValue >= 0)
    {
        digitalWrite(CELL_POINT1, lValue & 1);
        digitalWrite(CELL_POINT2, lValue & 2);
        digitalWrite(CELL_POINT3, lValue & 4);
        digitalWrite(CELL_POINT4, lValue & 8);
        digitalWrite(CELL_POINT5, lValue & 16);
        digitalWrite(CELL_POINT6, lValue & 32);
    }
}

void createAccessPoint()
{
    Serial.println("Criando AP");

    WiFiManager wifiManager;
    wifiManager.resetSettings();
    wifiManager.setSaveConfigCallback(wifiSaveCallback);

    if (!wifiManager.startConfigPortal(m_sAPSSID))
    {
        Serial.println("Falha ao conectar");
        delay(2000);
        ESP.reset();

    }
    String sValor;
    

}

void setup()
{
    Serial.begin(9600);

    INPUT_SETUP(PIN_RESET_WIFI);

    OUTPUT_SETUP(CELL_POINT1);
    OUTPUT_SETUP(CELL_POINT2);
    OUTPUT_SETUP(CELL_POINT3);
    OUTPUT_SETUP(CELL_POINT4);
    OUTPUT_SETUP(CELL_POINT5);
    OUTPUT_SETUP(CELL_POINT6);

    m_Server.on("/TouchBraille", onClientRequest);

    //WiFiManager wifiManager;

    //wifiManager.setSaveConfigCallback(wifiSaveCallback);
    //wifiManager.autoConnect(m_sAPSSID);

    WiFi.begin("TOMELIN-HOUSE", "4784850435");
}

void loop()
{
    if (m_AsyncUDP.listenMulticast(IPAddress(224, 3, 4, 95), 555))
            m_AsyncUDP.onPacket(handleReceivedPackets);    
    
    if (!m_Server.isServerStarted() && WiFi.isConnected())
    {
        m_Server.startServer();
    }

    if (m_Server.isServerStarted())
        m_Server.handleClient();

    if (digitalRead(PIN_RESET_WIFI) == HIGH)
    {
        //m_Server.stopServer();
        //createAccessPoint();
    }
}
*/