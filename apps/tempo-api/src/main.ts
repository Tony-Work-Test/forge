/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import session from 'express-session';
import { AppModule } from './app/app.module';
import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.use(
    session({ // TODO: Switch session store in production for redis or similar
      secret: process.env.Session_Secret, // Choose a strong secret
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: process.env.ENV === "dev" ? true : false,
        secure: process.env.ENV === "dev" ? false : true, // Set to true if you are using HTTPS
        maxAge: 3600000, // 1 hour
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
