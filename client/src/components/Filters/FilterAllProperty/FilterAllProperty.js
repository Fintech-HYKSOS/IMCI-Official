import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../styles/FilterAllProperty.css'
import { types_offres } from '../../../constants/type-offres';
import { useContext, useState } from 'react';
import { FilterContext } from '../../../context/FilterContext';


// const RenderListOptionsOfFilter = () => {
//     // const { allOptionsFilter, 
//     //     setAllOptionsFilter, 
//     //     terrainFilter, 
//     //     setTerrainFilter, 
//     //     appartementFilter, 
//     //     setAppartementFilter, 
//     //     villaFilter, 
//     //     setVillaFilter, 
//     //     studioFilter, 
//     //     setStudioFilter, 
//     //     bureauFilter, 
//     //     setBureauFilter,
//     //     magasinFilter, 
//     //     setMagasinFilter,
//     //     meubleAppartementFilter, 
//     //     setMeubleAppartementFilter,
//     //     minPriceFilter, 
//     //     setMinPriceFilter,
//     //     maxPriceFilter, 
//     //     setMaxPriceFilter} = useContext(FilterContext)

//     // const [clicked, setFilterProperty] = useState({
//     //     Terrain: false,
//     //     Appartement: false,
//     //     Villa: false,
//     //     Studio: false,
//     //     Bureau: false,
//     //     Magasin: false,
//     //     Appartement_Meublé: false
//     // })

//     return (
//         types_offres.map((item, key) => {
//             return (
//                 <MenuItem className={clicked && `${item.name}`} key={key} onClick={() => setFilterProperty(true)}>
//                     {item.name}
//                 </MenuItem>
//             )
//         })
//     )
// }


const FilterAllProperty = () => {
    const { allOptionsFilter,
        setAllOptionsFilter,
        terrainFilter,
        setTerrainFilter,
        appartementFilter,
        setAppartementFilter,
        villaFilter,
        setVillaFilter,
        studioFilter,
        setStudioFilter,
        bureauFilter,
        setBureauFilter,
        magasinFilter,
        setMagasinFilter,
        meubleAppartementFilter,
        setMeubleAppartementFilter,
        minPriceFilter,
        setMinPriceFilter,
        maxPriceFilter,
        setMaxPriceFilter,
        filterProperty,
        setFilterProperty } = useContext(FilterContext)

    console.log("filterProperty", filterProperty)

    return (
        <div>
            <Sidebar className='sidebar-custom border border-2 shadow-xl'>
                <div className='w-full bg-black text-white p-1 flex items-center justify-center'>
                    <h1 className='text-xl mb-3'>Filtrer les propriétés</h1>
                </div>
                <Menu>
                    <SubMenu label="Type de bien" defaultOpen className='bg-gray-200'>
                        <MenuItem className={filterProperty.allOptions && 'allOptions'}
                            onClick={() => setFilterProperty({
                                ...filterProperty,
                                allOptions: true,
                                Terrain: false,
                                Appartement: false,
                                Villa: false,
                                Studio: false,
                                Bureau: false,
                                Magasin: false,
                                Appartement_Meublé: false
                            })}>
                            Toutes les options
                        </MenuItem>

                        <MenuItem
                            className={filterProperty.Terrain && 'Terrain'}
                            onClick={() => setFilterProperty({ ...filterProperty, allOptions: false, Terrain: true })}>
                            Terrain
                        </MenuItem>
                        <MenuItem
                            className={filterProperty.Appartement && 'Appartement'}
                            onClick={() => setFilterProperty({ ...filterProperty, allOptions: false, Appartement: true })}>
                            Appartement
                        </MenuItem>
                        <MenuItem
                            className={filterProperty.Villa && 'Villa'}
                            onClick={() => setFilterProperty({ ...filterProperty, allOptions: false, Villa: true })}>
                            Villa
                        </MenuItem>
                        <MenuItem
                            className={filterProperty.Studio && 'Studio'}
                            onClick={() => setFilterProperty({ ...filterProperty, allOptions: false, Studio: true })}>
                            Studio
                        </MenuItem>
                        <MenuItem
                            className={filterProperty.Bureau && 'Bureau'}
                            onClick={() => setFilterProperty({ ...filterProperty, allOptions: false, Bureau: true })}>
                            Bureau
                        </MenuItem>
                        <MenuItem
                            className={filterProperty.Magasin && 'Magasin'}
                            onClick={() => setFilterProperty({ ...filterProperty, allOptions: false, Magasin: true })}>
                            Magasin
                        </MenuItem>
                        <MenuItem
                            className={filterProperty.Appartement_Meublé && 'Appartement Meublé'}
                            onClick={() => setFilterProperty({ ...filterProperty, allOptions: false, Appartement_Meublé: true })}>
                            Appartement Meublé
                        </MenuItem>
                    </SubMenu>

                    <SubMenu label="Tranche de prix voulues" className='bg-gray-200 overflow-hidden submenu-custom' defaultOpen>
                        <div className='mx-5 py-5'>
                            <div className='mb-2'>
                                <label for="name" className="block font-bold text-gray-600">Prix minimum</label>
                                <input type="number" value={minPriceFilter} id="name" name="name" placeholder="Prix minimum" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>
                            <div>
                                <label for="name" className="block font-bold text-gray-600">Prix maximal</label>
                                <input type="number" value={maxPriceFilter} id="name" name="name" placeholder="Prix maximal" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>
                        </div>
                    </SubMenu>
                </Menu>
                <div className='text-center mb-3'>
                    <button className='bg-black text-white p-3 text-center rounded-lg'>Cliquer pour filtrer</button>
                </div>
            </Sidebar>
            <br />
        </div>
    )
}

export default FilterAllProperty