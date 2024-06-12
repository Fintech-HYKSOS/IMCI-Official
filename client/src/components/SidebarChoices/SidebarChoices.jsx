import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { types_offres } from '../../constants/type-offres';

const SidebarChoices = () => {
    return (
        <div>
            <Sidebar className='sidebar-custom border border-2 shadow-xl'>
                {/* <div className='w-full bg-black text-white p-1 flex items-center justify-center'>
                    <h1 className='text-xl mb-3'>Filtrer les propriétés</h1>
                </div> */}
                <Menu>
                    {/* <MenuItem active>Souscire</MenuItem>
                    <MenuItem>Faire une demande de devis</MenuItem> */}
                    <MenuItem active={true}>Souscrire à une offre</MenuItem>
                    <MenuItem active={true}>Faire une demande de devis</MenuItem>
                    <MenuItem active={true}>Contacter</MenuItem>                                
                </Menu>
            </Sidebar>
            <br />
        </div>
    )
}

export default SidebarChoices