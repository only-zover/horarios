import type { PageLoad } from "./$types"

export const load: PageLoad = ({ params }) => {
    return {
        nome: "Page",
        parametros: params
    }
}