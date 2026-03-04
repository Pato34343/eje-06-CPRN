import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnoController } from './alumno/alumno.controller';
import { AlumnoModule } from './alumno/alumno.module';
import { MateriaController } from './materia/materia.controller';
import { MateriaModule } from './materia/materia.module';
import { DocenteController } from './docente/docente.controller';
import { DocenteModule } from './docente/docente.module';

@Module({
  imports: [AlumnoModule, MateriaModule, DocenteModule],
  controllers: [AppController, AlumnoController, MateriaController, DocenteController],
  providers: [AppService],
})
export class AppModule {}
