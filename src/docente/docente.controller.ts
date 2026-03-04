import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('docente')
export class DocenteController {
    @Get()
            findAll(){
                return[
                    {id:1,nombre:'jose',Academia:'Ciencias'},
                    {id:2,nombre:'Raul',Academia:'Matematicas'},
                    {id:3,nombre:'Pato',Academia:'Sociales'}
        
                ];
            }
            @Get(':id')
            findById(@Param('id') id:string){
                //http://localhost:3000/usuarios/id    - para el id de cada usuario ingresado (postman)
                return {id}
            }
            @Post()
            create(@Body() Docente:{}){
                return Docente;
            }
        
            @Put(':id')
            update(@Param('id')id:string, @Body() updateDocente:{}){
                return updateDocente;
        
            }
        
            @Delete(':id')
            delete(@Param('id')id:string){
                return {id};
            }
}
