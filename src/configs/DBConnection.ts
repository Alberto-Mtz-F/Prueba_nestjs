import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

export const Connection = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'prueba-bd',
    entities: [User],
    synchronize: true,
  })