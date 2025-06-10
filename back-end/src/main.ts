import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtAuthGuard } from './utils/jwt-auth.guard';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation for my NestJS app')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        name: 'Authorization',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'Authorization', // This name will be referenced in @ApiBearerAuth()
    )
    .addTag('posts') // optional
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.enableCors({
    origin: ['http://localhost:3000']
  });

   const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
