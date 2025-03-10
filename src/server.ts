import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { userController } from "./controller/userController";

const PORT = 50051;
const PROTO_PATH = __dirname + "/../proto/user.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;
const userProto = protoDescriptor.user;

function main() {
  const server = new grpc.Server();

  server.addService(userProto.UserService.service, {
    CreateUser: userController.CreateUser,
    GetUser: userController.GetUser,
    ListUsers: userController.ListUsers,
  });

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      server.start();
      console.log(`Servidor gRPC iniciado na porta ${port}...`);
    }
  );
}

main();
