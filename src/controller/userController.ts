import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import { UserModel } from "../model/userModel";

const userModel = new UserModel();

export const userController = {
  CreateUser: (
    call: ServerUnaryCall<{ name: string; email: string }, any>,
    callback: sendUnaryData<any>
  ) => {
    const { name, email } = call.request;
    const user = userModel.createUser(name, email);
    callback(null, user);
  },

  GetUser: (
    call: ServerUnaryCall<{ id: number }, any>,
    callback: sendUnaryData<any>
  ) => {
    const { id } = call.request;
    const user = userModel.getUser(id);
    if (!user) {
      return callback({
        code: status.NOT_FOUND,
        message: "Usuário não encontrado",
      }, null);
    }
    callback(null, user);
  },

  ListUsers: (
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>
  ) => {
    const users = userModel.listUsers();
    callback(null, { users });
  },
};
