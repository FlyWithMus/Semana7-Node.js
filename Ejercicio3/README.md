# Ejercicio node 3

Crea un programa que recoja a través de sus argumentos la dirección de una imagen de forma que cree en el mismo directorio que esta una carpeta `samples` con diferentes variaciones de la misma (blanco y negro, diversos tamaños, filtros...).

Para hacer estas modificaciones en la imagen, puedes usar el módulo [https://www.npmjs.com/package/sharp](sharp).

En la documentación puedes buscar los métodos necesarios [https://sharp.pixelplumbing.com/](documentación).

Ejemplo de uso:

    sharp(imagePath)
      .resize({ width: 100 })
      .toFile(savePath);
