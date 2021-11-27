import CONFIG from '../configuracion/config.json';

export async function consumir() {
    const ruta = new URL(CONFIG.COMMENTS_API);
    const result = await fetch(ruta);
    return await result.json();
}