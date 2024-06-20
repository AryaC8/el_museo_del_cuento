import type { APIRoute } from "astro";
import { db, Cuento, eq } from 'astro:db';

export const POST: APIRoute = async ({ url }) =>{
    const urlTotal =  url.pathname
    const categoria = urlTotal.split("/")[3]      
    let cuento 
    if(categoria)
        cuento = await db.select({nombre : Cuento.nombre}).from(Cuento).where(eq (Cuento.categoria, categoria));
    else 
        return new Response (categoria, { status: 400 })

    if(!cuento)return new Response ("Cuento no encontrado", { status: 404 })
        
    return new Response (
        JSON.stringify({
             cuento 
        })
    )
}