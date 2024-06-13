import { defineDb, defineTable, column } from 'astro:db';

// const User = defineTable({
//   columns:{
//     id: column.text({ primaryKey: true, optional: false, unique: true }),
//     username: column.text(),
//     password: column.text()
//   }
// })

//const Session = defineTable ({
//  columns:{
//    id: column.text({optional: false, unique: true}),
//    userId: cloumn.text({ optional: false, references: () => User.columns.id }),
//    expiresAt: column.number({ optional: false })
//  }  
//})

const Cuento = defineTable({
  columns:{
    id: column.text({primaryKey: true}),
    portada: column.text(),
    nombre: column.text(),
    autor: column.text(),
    editorial: column.text(),
    anyo: column.text(),
    categoria: column.text({ references: () => Categoria.columns.id }),
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
    categoria: column.text({ references: () => Categoria.columns.id }),
    anyadidoPor: column.text(),     
  }
})

const Categoria = defineTable({
  columns:{
    id: column.text({primaryKey: true}),
    nombre: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Cuento,
    CuentoDeseado, 
    // User, 
    //Session,
    Categoria
  }
});
