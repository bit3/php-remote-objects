
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","RemoteObjects\\Client"],["p","RemoteObjects\\Client::$encoder"],["p","RemoteObjects\\Client::$logger"],["p","RemoteObjects\\Client::$transport"],["m","RemoteObjects\\Client::__construct()"],["m","RemoteObjects\\Client::castAsRemoteObject()"],["m","RemoteObjects\\Client::getEncoder()"],["m","RemoteObjects\\Client::getLogger()"],["m","RemoteObjects\\Client::getRemoteObject()"],["m","RemoteObjects\\Client::getTransport()"],["m","RemoteObjects\\Client::invoke()"],["m","RemoteObjects\\Client::invokeArgs()"],["m","RemoteObjects\\Client::setEncoder()"],["m","RemoteObjects\\Client::setLogger()"],["m","RemoteObjects\\Client::setTransport()"],["c","RemoteObjects\\Encode\\AesEncoder"],["p","RemoteObjects\\Encode\\AesEncoder::$aes"],["p","RemoteObjects\\Encode\\AesEncoder::$psk"],["m","RemoteObjects\\Encode\\AesEncoder::__construct()"],["m","RemoteObjects\\Encode\\AesEncoder::decrypt()"],["m","RemoteObjects\\Encode\\AesEncoder::encrypt()"],["m","RemoteObjects\\Encode\\AesEncoder::getCryptAes()"],["m","RemoteObjects\\Encode\\AesEncoder::getPsk()"],["m","RemoteObjects\\Encode\\AesEncoder::setPsk()"],["c","RemoteObjects\\Encode\\CryptEncoder"],["p","RemoteObjects\\Encode\\CryptEncoder::$encoder"],["p","RemoteObjects\\Encode\\CryptEncoder::$plainExceptions"],["m","RemoteObjects\\Encode\\CryptEncoder::__construct()"],["m","RemoteObjects\\Encode\\CryptEncoder::decodeMethod()"],["m","RemoteObjects\\Encode\\CryptEncoder::decodeResult()"],["m","RemoteObjects\\Encode\\CryptEncoder::decrypt()"],["m","RemoteObjects\\Encode\\CryptEncoder::encodeException()"],["m","RemoteObjects\\Encode\\CryptEncoder::encodeMethod()"],["m","RemoteObjects\\Encode\\CryptEncoder::encodeResult()"],["m","RemoteObjects\\Encode\\CryptEncoder::encrypt()"],["c","RemoteObjects\\Encode\\Encoder"],["m","RemoteObjects\\Encode\\Encoder::decodeMethod()"],["m","RemoteObjects\\Encode\\Encoder::decodeResult()"],["m","RemoteObjects\\Encode\\Encoder::encodeException()"],["m","RemoteObjects\\Encode\\Encoder::encodeMethod()"],["m","RemoteObjects\\Encode\\Encoder::encodeResult()"],["c","RemoteObjects\\Encode\\JsonRpc20Encoder"],["p","RemoteObjects\\Encode\\JsonRpc20Encoder::$lastDecodeId"],["p","RemoteObjects\\Encode\\JsonRpc20Encoder::$lastRequestId"],["p","RemoteObjects\\Encode\\JsonRpc20Encoder::$logger"],["m","RemoteObjects\\Encode\\JsonRpc20Encoder::decode()"],["m","RemoteObjects\\Encode\\JsonRpc20Encoder::decodeMethod()"],["m","RemoteObjects\\Encode\\JsonRpc20Encoder::decodeResult()"],["m","RemoteObjects\\Encode\\JsonRpc20Encoder::encodeException()"],["m","RemoteObjects\\Encode\\JsonRpc20Encoder::encodeExceptionObject()"],["m","RemoteObjects\\Encode\\JsonRpc20Encoder::encodeMethod()"],["m","RemoteObjects\\Encode\\JsonRpc20Encoder::encodeResult()"],["m","RemoteObjects\\Encode\\JsonRpc20Encoder::getLogger()"],["m","RemoteObjects\\Encode\\JsonRpc20Encoder::setLogger()"],["c","RemoteObjects\\Encode\\LoggingEncoder"],["p","RemoteObjects\\Encode\\LoggingEncoder::$logger"],["m","RemoteObjects\\Encode\\LoggingEncoder::getLogger()"],["m","RemoteObjects\\Encode\\LoggingEncoder::setLogger()"],["c","RemoteObjects\\Encode\\RsaEncoder"],["p","RemoteObjects\\Encode\\RsaEncoder::$localPrivateKey"],["p","RemoteObjects\\Encode\\RsaEncoder::$remotePublicKey"],["p","RemoteObjects\\Encode\\RsaEncoder::$rsa"],["m","RemoteObjects\\Encode\\RsaEncoder::__construct()"],["m","RemoteObjects\\Encode\\RsaEncoder::decrypt()"],["m","RemoteObjects\\Encode\\RsaEncoder::encrypt()"],["m","RemoteObjects\\Encode\\RsaEncoder::getCryptRsa()"],["m","RemoteObjects\\Encode\\RsaEncoder::getLocalPrivateKey()"],["m","RemoteObjects\\Encode\\RsaEncoder::getRemotePublicKey()"],["m","RemoteObjects\\Encode\\RsaEncoder::setLocalPrivateKey()"],["m","RemoteObjects\\Encode\\RsaEncoder::setRemotePublicKey()"],["c","RemoteObjects\\Proxy\\RemoteObjectProxy"],["p","RemoteObjects\\Proxy\\RemoteObjectProxy::$client"],["p","RemoteObjects\\Proxy\\RemoteObjectProxy::$path"],["m","RemoteObjects\\Proxy\\RemoteObjectProxy::__call()"],["m","RemoteObjects\\Proxy\\RemoteObjectProxy::__construct()"],["m","RemoteObjects\\Proxy\\RemoteObjectProxy::__get()"],["cc","RemoteObjects\\Proxy\\RemoteObjectProxy::NS_SEPARATOR"],["cc","RemoteObjects\\Proxy\\RemoteObjectProxy::NS_SEPARATOR_LENGTH"],["c","RemoteObjects\\Proxy\\RemoteObjectProxyGenerator"],["m","RemoteObjects\\Proxy\\RemoteObjectProxyGenerator::generate()"],["c","RemoteObjects\\RemoteObject"],["c","RemoteObjects\\Server"],["p","RemoteObjects\\Server::$encoder"],["p","RemoteObjects\\Server::$logger"],["p","RemoteObjects\\Server::$target"],["p","RemoteObjects\\Server::$transport"],["m","RemoteObjects\\Server::__construct()"],["m","RemoteObjects\\Server::getEncoder()"],["m","RemoteObjects\\Server::getLogger()"],["m","RemoteObjects\\Server::getTarget()"],["m","RemoteObjects\\Server::getTransport()"],["m","RemoteObjects\\Server::handle()"],["m","RemoteObjects\\Server::invoke()"],["m","RemoteObjects\\Server::setEncoder()"],["m","RemoteObjects\\Server::setLogger()"],["m","RemoteObjects\\Server::setTarget()"],["m","RemoteObjects\\Server::setTransport()"],["c","RemoteObjects\\Test\\AbstractInvocationTestCase"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::getLogger()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::providerEncoderChains()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::providerRemoteObjectTypes()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::shutdownClient()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::shutdownServer()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::spawnClient()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::spawnServer()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::testChaining()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::testClientCast()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::testInvalidMethod()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::testInvoke()"],["m","RemoteObjects\\Test\\AbstractInvocationTestCase::testNamedRemote()"],["c","RemoteObjects\\Test\\EchoInterface"],["m","RemoteObjects\\Test\\EchoInterface::reply()"],["m","RemoteObjects\\Test\\EchoInterface::replyArray()"],["m","RemoteObjects\\Test\\EchoInterface::replyCombined()"],["m","RemoteObjects\\Test\\EchoInterface::replyDefault()"],["m","RemoteObjects\\Test\\EchoInterface::replyObject()"],["m","RemoteObjects\\Test\\EchoInterface::replyReference()"],["c","RemoteObjects\\Test\\EchoObject"],["m","RemoteObjects\\Test\\EchoObject::reply()"],["c","RemoteObjects\\Test\\UnixSocketTest"],["p","RemoteObjects\\Test\\UnixSocketTest::$clientSocket"],["p","RemoteObjects\\Test\\UnixSocketTest::$server"],["p","RemoteObjects\\Test\\UnixSocketTest::$serverSocket"],["m","RemoteObjects\\Test\\UnixSocketTest::setUp()"],["m","RemoteObjects\\Test\\UnixSocketTest::shutdownClient()"],["m","RemoteObjects\\Test\\UnixSocketTest::shutdownServer()"],["m","RemoteObjects\\Test\\UnixSocketTest::spawnClient()"],["m","RemoteObjects\\Test\\UnixSocketTest::spawnServer()"],["c","RemoteObjects\\Test\\UnixSocketTestServer"],["m","RemoteObjects\\Test\\UnixSocketTestServer::run()"],["c","RemoteObjects\\Transport\\Client"],["m","RemoteObjects\\Transport\\Client::request()"],["c","RemoteObjects\\Transport\\CurlClient"],["p","RemoteObjects\\Transport\\CurlClient::$curl"],["p","RemoteObjects\\Transport\\CurlClient::$headers"],["p","RemoteObjects\\Transport\\CurlClient::$logger"],["p","RemoteObjects\\Transport\\CurlClient::$url"],["m","RemoteObjects\\Transport\\CurlClient::__construct()"],["m","RemoteObjects\\Transport\\CurlClient::getCurl()"],["m","RemoteObjects\\Transport\\CurlClient::getLogger()"],["m","RemoteObjects\\Transport\\CurlClient::request()"],["m","RemoteObjects\\Transport\\CurlClient::setLogger()"],["c","RemoteObjects\\Transport\\HttpServer"],["p","RemoteObjects\\Transport\\HttpServer::$contentType"],["p","RemoteObjects\\Transport\\HttpServer::$logger"],["m","RemoteObjects\\Transport\\HttpServer::__construct()"],["m","RemoteObjects\\Transport\\HttpServer::getLogger()"],["m","RemoteObjects\\Transport\\HttpServer::receive()"],["m","RemoteObjects\\Transport\\HttpServer::respond()"],["m","RemoteObjects\\Transport\\HttpServer::setLogger()"],["c","RemoteObjects\\Transport\\Server"],["m","RemoteObjects\\Transport\\Server::receive()"],["m","RemoteObjects\\Transport\\Server::respond()"],["c","RemoteObjects\\Transport\\UnixSocket"],["p","RemoteObjects\\Transport\\UnixSocket::$logger"],["p","RemoteObjects\\Transport\\UnixSocket::$socket"],["p","RemoteObjects\\Transport\\UnixSocket::$socketPath"],["p","RemoteObjects\\Transport\\UnixSocket::$targetSocketPath"],["m","RemoteObjects\\Transport\\UnixSocket::__construct()"],["m","RemoteObjects\\Transport\\UnixSocket::close()"],["m","RemoteObjects\\Transport\\UnixSocket::getLogger()"],["m","RemoteObjects\\Transport\\UnixSocket::getSocket()"],["m","RemoteObjects\\Transport\\UnixSocket::setLogger()"],["m","RemoteObjects\\Transport\\UnixSocket::socketReceive()"],["m","RemoteObjects\\Transport\\UnixSocket::socketSend()"],["c","RemoteObjects\\Transport\\UnixSocketClient"],["m","RemoteObjects\\Transport\\UnixSocketClient::__construct()"],["m","RemoteObjects\\Transport\\UnixSocketClient::request()"],["c","RemoteObjects\\Transport\\UnixSocketServer"],["m","RemoteObjects\\Transport\\UnixSocketServer::__construct()"],["m","RemoteObjects\\Transport\\UnixSocketServer::receive()"],["m","RemoteObjects\\Transport\\UnixSocketServer::respond()"]];
