import { db, Categoria } from 'astro:db';

// // https://astro.build/db/seed
export default async function seed() {
	await db.insert(Categoria).values([
      { id: "1", nombre: "Valenciano" },
      {id: "2", nombre: "Diversidad familiar"},
      {id: "3", nombre: "Inclusión"},
      {id: "4", nombre: "Emociones / Sentimientos"},
      {id: "5", nombre: "Clásicos"},
      {id: "6", nombre: "Inglés"},
      {id: "7", nombre: "Navidad"},
      {id: "8", nombre: "Fallas"},
      {id: "9", nombre: "Convivencia"},
      {id: "10", nombre: "Anatomía"},
      {id: "11", nombre: "Creatividad"},
      {id: "12", nombre: "Princesas"},
      {id: "13", nombre: "Dinosaurios"},
      {id: "14", nombre: "Profesiones"},
      {id: "15", nombre: "Planeta"},
      {id: "16", nombre: "Pintores"},
      {id: "17", nombre: "Halloween"},
      {id: "18", nombre: "Monstruos"},
      {id: "19", nombre: "Mujer"},
      {id: "20", nombre: "Hervé Tullet"},
   ])
}