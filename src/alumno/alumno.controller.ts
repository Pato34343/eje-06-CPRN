import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';

@Controller('alumno')
export class AlumnoController {

    @Get()
        findAll(){
            return[
                {id:1,nombre:'jose',Boleta:'2025670090'},
                {id:2,nombre:'Raul',Boleta:'2025670100'},
                {id:3,nombre:'Pato',Boleta:'2025670001'}
    
            ];
        }
        @Get(':id')
        findById(@Param('id') id:string){
            //http://localhost:3000/usuarios/id    - para el id de cada usuario ingresado (postman)
            return {id}
        }
        @Post()
        create(@Body() Alumno:{}){
            return Alumno;
        }
    
        @Put(':id')
        update(@Param('id')id:string, @Body() updateAlumno:{}){
            return updateAlumno;
    
        }
    
        @Delete(':id')
        delete(@Param('id')id:string){
            return {id};
        }
}
