import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './FilterAllProperty.css'

const FilterAllProperty = () => {
    return (
        <div>
            <Sidebar className='sidebar-custom'>
                <Menu>
                    <MenuItem>Documentation</MenuItem>
                    <MenuItem> Calendar</MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                    <MenuItem> Examples</MenuItem>
                </Menu>
            </Sidebar>
            <br />
        </div>
    )
}

export default FilterAllProperty