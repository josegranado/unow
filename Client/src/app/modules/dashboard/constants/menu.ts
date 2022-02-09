export interface Menu{
    label?:string,
    to?:string,
    icon?:string
}
const data: Menu[] = [
    {
        icon: 'iconsminds-shop-4',
        label: 'Dashboard',
        to: '',
    },
    {
        icon: 'simple-icon-people',
        label: 'Empleados',
        to: '/dashboard/employees',
    }
];
export default data;