import { getCurrentUser } from "../../backend/localStorage";
import { User } from "../../types/user";

export interface AuthHeader {
  authorization?: string;
}

/**
 * Returns authorization header with JWT token.
 *
 * When making an axios request on a protected endpoint, include
 * `{ headers:authHeader() }`
 *
 * example: `axios.post("localhost:5001", data, { headers: authHeader() })`
 */

export default function authHeader(): AuthHeader {
  const user: User | null = getCurrentUser();
  if (user && user.token) {
    return { authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
