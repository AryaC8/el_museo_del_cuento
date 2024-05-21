import { defineDb, defineTable, column } from 'astro:db';

// const User = defineTable({
//   columns:{
//     id: column.text({primaryKey: true}),
//     nombre: column.text(),
//   }
// })

const Cuento = defineTable({
  columns:{
    id: column.text({primaryKey: true}),
    portada: column.text(),
    nombre: column.text(),
    autor: column.text(),
    editorial: column.text(),
    anyo: column.text(),
    categoria: column.text(),
    anyadidoPor: column.text(), 
    quienLoTiene: column.text(),   
    prestado: column.boolean({ default: false }),
    prestadoA: column.text({ optional: true })
  }
})

const CuentoDeseado = defineTable({
  columns:{
    id: column.text({primaryKey: true}),
    portada: column.text(),
    nombre: column.text(),
    autor: column.text(),
    editorial: column.text(),
    anyo: column.text(),
    categoria: column.text(),
    anyadidoPor: column.text(),     
  }
})

// const Categoria = defineTable({
//   columns:{
//     id: column.text({primaryKey: true}),
//     categoria: column.text(),
//   }
// })

// https://astro.build/db/config
export default defineDb({
  tables: {
    Cuento,
    CuentoDeseado, 
    // User, 
    // Categoria
  }
});
