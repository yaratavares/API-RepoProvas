import { User } from "@prisma/client";
import axios from "axios";

import authRepository, {
  UserWithoutId,
} from "../repositories/authRepository.js";
import { verifyOrCreateSession } from "./authService.js";

interface ReponseGithubClient {
  access_token: string;
}
//estou utilizando um serviço de auth - authService está gigante - verificar com tutor
interface ResponseUserGithub {
  id: number;
}

async function authenticate(code: string) {
  const url = "https://github.com/login/oauth/access_token";

  const { data: dataGithubResponse } = await axios.post<ReponseGithubClient>(
    url,
    null,
    {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: "application/json",
      },
    }
  );

  const { data: dataUserResponse } = await axios.get<ResponseUserGithub>(
    "https://api.github.com/user",
    {
      headers: {
        authorization: `Bearer ${dataGithubResponse.access_token}`,
      },
    }
  );

  let user = await authRepository.findByGithubId(dataUserResponse.id);

  const dataUser: UserWithoutId = {
    githubId: dataUserResponse.id,
    password: null,
    email: null,
  };

  if (!user) {
    user = await authRepository.insert(dataUser);
  }

  const token = await verifyOrCreateSession(user);

  return token;
}

export default { authenticate };
