#include "WebServerEx.h"

WebServerEx::WebServerEx(const IPAddress &addr, uint16_t port /*= 80*/) : ESP8266WebServer(addr, port)
{
    clean();
}

WebServerEx::WebServerEx(uint16_t port /*=80*/) : ESP8266WebServer(port)
{
    clean();
}

WebServerEx::~WebServerEx()
{
}

bool WebServerEx::isServerStarted()
{
    return m_bServerStarted;
}

void WebServerEx::clean()
{
    m_bServerStarted = false;
}

void WebServerEx::startServer()
{
    m_bServerStarted = true;
    begin();
}

void WebServerEx::stopServer()
{
    m_bServerStarted = false;
    stop();
}