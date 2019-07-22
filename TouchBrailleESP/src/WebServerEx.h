#ifdef ESP8266
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#else
#include <WiFi.h>
#include <WebServer.h>
#endif

class WebServerEx : public ESP8266WebServer
{
public:
    WebServerEx(const IPAddress& addr, uint16_t port = 80);
    WebServerEx(uint16_t port = 80);
    virtual ~WebServerEx();

    void startServer();
    void stopServer();
    bool isServerStarted();

private:
    bool m_bServerStarted;
    void clean();
    void touchBrailleRoute();
};