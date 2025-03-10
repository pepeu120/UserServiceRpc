import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

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
  const client = new userProto.UserService(
    "127.0.0.1:50051",
    grpc.credentials.createInsecure()
  );

  const users = [];

  client.CreateUser({ name: "Elisney Trindade", email: "elisney@ifba.com" }, (err: any, user: any) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      return;
    }
    console.log("Usuário criado:", user);
    users.push(user);
  });

  client.CreateUser({ name: "Eliseu Reis", email: "eliseu@ifba.com" }, (err: any, user: any) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      return;
    }
    console.log("Usuário criado:", user);
    users.push(user);
  });

  client.CreateUser({ name: "Marcos Paranhos", email: "marcos@ifba.com" }, (err: any, user: any) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      return;
    }
    console.log("Usuário criado:", user);
    users.push(user);
  });

  client.ListUsers({}, (err: any, listResponse: any) => {
    if (err) {
      console.error("Erro ao listar usuários:", err);
      return;
    }
    console.log("Lista de usuários:", listResponse.users);
  });

  client.GetUser({ id: 1 }, (err: any, result: any) => {
    if (err) {
      console.error("Erro ao buscar usuário:", err);
      return;
    }
    console.log("Usuário obtido:", result);
  });
}

main();
