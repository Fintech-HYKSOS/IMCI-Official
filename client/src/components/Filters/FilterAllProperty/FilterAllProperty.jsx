import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../styles/FilterAllProperty.css'
import { types_offres } from '../../../constants/type-offres';


const renderListOptionsOfFilter = () => {
    return (
        types_offres.map((item, key) => {
            return (
                <MenuItem active={true}>
                    {item.name}
                </MenuItem>
            )
        })
    )
}


const FilterAllProperty = () => {
    return (
        <div>
            <Sidebar className='sidebar-custom border border-2 shadow-xl'>
                <div className='w-full bg-black text-white p-1 flex items-center justify-center'>
                    <h1 className='text-xl mb-3'>Filtrer les propriétés</h1>
                </div>
                <Menu>
                    {/* <MenuItem active>Souscire</MenuItem>
                    <MenuItem>Faire une demande de devis</MenuItem> */}
                    <SubMenu label="Type de bien" defaultOpen className='bg-gray-200'>
                        <MenuItem active={true}>Toutes les options</MenuItem>
                        {renderListOptionsOfFilter()}
                    </SubMenu>
                    
                    <SubMenu label="Tranche de prix voulues" className='bg-gray-200 overflow-hidden submenu-custom' defaultOpen>
                        <div className='mx-5 py-5'>
                            <div className='mb-2'>
                                <label for="name" className="block font-bold text-gray-600">Prix minimum</label>
                                <input type="number" id="name" name="name" placeholder="Prix minimum" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>
                            <div>
                                <label for="name" className="block font-bold text-gray-600">Prix maximal</label>
                                <input type="number" id="name" name="name" placeholder="Prix maximal" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>
                        </div>
                    </SubMenu>
                </Menu>
            </Sidebar>
            <br />
        </div>
    )
}

export default FilterAllProperty