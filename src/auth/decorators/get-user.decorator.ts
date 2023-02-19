import { createParamDecorator } from "@nestjs/common/decorators/http/create-route-param-metadata.decorator";
import { ExecutionContext } from '@nestjs/common';
import { InternalServerErrorException } from "@nestjs/common/exceptions/internal-server-error.exception";

export const GetUser = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {

        const req = ctx.switchToHttp().getRequest();
        const user = req.user;

        if (!user)
            throw new InternalServerErrorException('User not found (request)');

        return (!data)
            ? user
            : user[data];

    }
);