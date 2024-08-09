import { userEntityMock } from "../../user/__mocks__/user.mock"
import { LoginDto } from "../dtos/login.dto"
import { LoginPayloadDto } from "../dtos/loginPayload.dto"

export const loginUserMock: LoginDto = {
    email: userEntityMock.email,
    password: userEntityMock.password
} 