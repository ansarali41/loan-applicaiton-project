import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationError } from 'class-validator';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { failed } from './helper/response';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: (validationErrors: ValidationError[] = []) => {
                const messages = validationErrors.map(error => {
                    const [key] = Object.keys(error.constraints);
                    return error.constraints[key];
                });
                return new BadRequestException(failed(400, messages.join()));
            },
            transform: true,
        }),
    );
    app.enableCors({ origin: '*' });

    await app.listen(3002);
}
bootstrap();
