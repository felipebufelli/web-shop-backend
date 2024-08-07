import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { authorizationToLoginPayload } from '../utils/base64-converter';

export const UserId = createParamDecorator((_, context: ExecutionContext) => {
  const { authorization } = context.switchToHttp().getRequest().headers;
  console.log('user-id decorator: Authorization', authorization);

  const loginPayload = authorizationToLoginPayload(authorization);

  return loginPayload?.id ?? undefined;
});
