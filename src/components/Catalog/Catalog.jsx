import { CatalogList } from '../Catalog/CatalogList/CatalogList'
import {CampersFilter} from './CampersFilter/CampersFilter'
import { CatalogWrapp } from './Catalog.styled'

export const Catalog = () => {
    return (
        <>
           <CatalogWrapp>
             <CampersFilter/>
             <CatalogList/>
           </CatalogWrapp>
        </>
    )
}
