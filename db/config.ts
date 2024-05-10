import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns:{
    id: column.text({primaryKey: true}),
    nombre: column.text(),
  }
})

const Cuento = defineTable({
  columns:{
    id: column.text({primaryKey: true}),
    nombre: column.text(),
    autor: column.text(),
    editorial: column.text(),
    anyo: column.text(),
    categoria: column.text(),
    add: column.text(), 
    quien: column.text(),   
    prestado: column.boolean(),
    prestadoA: column.text()
  }
})

const CuentoDeseado = defineTable({
  columns:{
    id: column.text({primaryKey: true}),
    nombre: column.text(),
    autor: column.text(),
    editorial: column.text(),
    anyo: column.text(),
    categoria: column.text(),
    add: column.text(), 
    quien: column.text(),   
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Cuento,
    CuentoDeseado, 
    User
  }
});
