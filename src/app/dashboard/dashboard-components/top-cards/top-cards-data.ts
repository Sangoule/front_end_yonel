export interface topcard {
    bgcolor: string,
    icon: string,
    title?: number,
    subtitle: string,
    montant?:number
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-wallet',
        subtitle: 'Nombres De Transactions',
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-coin',
        subtitle: 'Solde Agence'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        subtitle: 'Transactions Effectuées'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        subtitle: 'Transactions Invalides'
    },

] 