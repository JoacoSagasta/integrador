import { resolve } from 'node:path'

console.log(resolve('views')) /*quiero saber la ruta completa(absoluta) donde se encuentra la carpeta "view"*/


export default{
    server: {
        port: '2222',
    },
    css: {
        devSourcemap: true
    },

    build: {
        emtyOutDir: true,
        rollupOptions: {
            input: {
                alta: resolve('views/alta.html'),
                carrito: resolve('views/carrito.html'),
                contacto: resolve('views/contacto.html'),
                nosotros: resolve('views/nosotros.html'),
                inicio: resolve('views/index.html')
            }
        }
    }
}
