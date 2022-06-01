# Ejercicio node 1

Crea un programa de node que te permita guardar fechas con descripciones de eventos. Utiliza los argumentos del programa para introducir la fecha y el texto de forma que se guarde en un archivo .json. Añade también un argumento que saque por consola los eventos.

# Ejercicio node 2

Programa un servidor web usando express que contenga:

- Una ruta que devuelva la hora actual.
- Una ruta que devuelva el directorio del archivo dónde se haya el código del servidor.
- Un middleware que imprima por consola información de cada request.
- Un middleware que se ocupe de los errores 404.

# Ejercicio node 3

Crea un programa que recoja a través de sus argumentos la dirección de una imagen de forma que cree en el mismo directorio que esta una carpeta `samples` con diferentes variaciones de la misma (blanco y negro, diversos tamaños, filtros...).

Para hacer estas modificaciones en la imagen, puedes usar el módulo [https://www.npmjs.com/package/sharp](sharp).

En la documentación puedes buscar los métodos necesarios [https://sharp.pixelplumbing.com/](documentación).

Ejemplo de uso:

    sharp("imagePath")
      .resize({ width: 100 })
      .toFile("saveToPath");
