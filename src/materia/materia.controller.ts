import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('materia')
export class MateriaController {

    @Get()
                findAll(){
                    return[
                        {id:1,nombre:'Desarrollo Web',Carrera:'IA'},
                        {id:2,nombre:'Calculo',Carrera:'Todas'},
                        {id:3,nombre:'Diseño de software',Carrera:'IA'}
            
                    ];
                }
                @Get(':id')
                findById(@Param('id') id:string){
                    //http://localhost:3000/usuarios/id    - para el id de cada usuario ingresado (postman)
                    return {id}
                }
                @Post()
                create(@Body() Materia:{}){
                    return Materia;
                }
            
                @Put(':id')
                update(@Param('id')id:string, @Body() updateMateria:{}){
                    return updateMateria;
            
                }
            
                @Delete(':id')
                delete(@Param('id')id:string){
                    return {id};
                }
}
