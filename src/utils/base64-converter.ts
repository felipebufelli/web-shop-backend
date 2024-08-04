import { LoginPayloadDto } from 'src/auth/dtos/loginPayload.dto';
import { Any } from 'typeorm';

export function authorizationToLoginPayload(
  authorization: string,
): LoginPayloadDto | undefined {
  const authorizationSplited: string[] = authorization.split('.');

  if (authorizationSplited.length < 3 || !authorization[1]) return undefined;

  return JSON.parse(
    Buffer.from(authorizationSplited[1], 'base64').toString('ascii'),
  );
}
