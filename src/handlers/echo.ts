import * as grpc from 'grpc';

import { HelloRequest, HelloResponse } from '../../proto_bin/greeter/greeter_pb';
import { EchoServiceService, IEchoServiceServer } from '../../proto_bin/echo/echo_grpc_pb';
import { EchoRequest, EchoResponse } from '../../proto_bin/echo/echo_pb';

class EchoHandler implements IEchoServiceServer {
    // echo: grpc.handleUnaryCall<import("../../proto_bin/echo/echo_pb").EchoRequest, import("../../proto_bin/echo/echo_pb").EchoResponse>;
    echo = (call: grpc.ServerUnaryCall<EchoRequest>, callback: grpc.sendUnaryData<EchoResponse>): void => {
        const reply: EchoResponse = new EchoResponse();

        reply.setMessage(`Hello, ${call.request.getMessage()} dari ts`);

        callback(null, reply);

    }
    echoAbort: grpc.handleUnaryCall<import("../../proto_bin/echo/echo_pb").EchoRequest, import("../../proto_bin/echo/echo_pb").EchoResponse>;
    noOp: grpc.handleUnaryCall<import("../../proto_bin/echo/echo_pb").Empty, import("../../proto_bin/echo/echo_pb").Empty>;
    serverStreamingEcho: grpc.handleServerStreamingCall<import("../../proto_bin/echo/echo_pb").ServerStreamingEchoRequest, import("../../proto_bin/echo/echo_pb").ServerStreamingEchoResponse>;
    serverStreamingEchoAbort: grpc.handleServerStreamingCall<import("../../proto_bin/echo/echo_pb").ServerStreamingEchoRequest, import("../../proto_bin/echo/echo_pb").ServerStreamingEchoResponse>;
    clientStreamingEcho: grpc.handleClientStreamingCall<import("../../proto_bin/echo/echo_pb").ClientStreamingEchoRequest, import("../../proto_bin/echo/echo_pb").ClientStreamingEchoResponse>;
    fullDuplexEcho: grpc.handleBidiStreamingCall<import("../../proto_bin/echo/echo_pb").EchoRequest, import("../../proto_bin/echo/echo_pb").EchoResponse>;
    halfDuplexEcho: grpc.handleBidiStreamingCall<import("../../proto_bin/echo/echo_pb").EchoRequest, import("../../proto_bin/echo/echo_pb").EchoResponse>;
    /**
     * Greet the user nicely
     * @param call
     * @param callback
     */    
    
    // sayHello = (call: grpc.ServerUnaryCall<HelloRequest>, callback: grpc.sendUnaryData<HelloResponse>): void => {
    //     const reply: HelloResponse = new HelloResponse();

    //     reply.setMessage(`Hello, ${ call.request.getName() }`);

    //     callback(null, reply);
    // };
}

export default {
    service: EchoServiceService,
    handler: new EchoHandler(),
};
