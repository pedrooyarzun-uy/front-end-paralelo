import React from 'react'
import { Menu } from './components/Menu'
import { MenuItem } from './components/MenuItem'
import { VerticalMenu } from './components/VerticalMenu'
import Route from './components/Route'
import './index.css'
import BlackListDetail from './components/BlackListDetail'

export const App = () => {
  return (
    <div className="ui celled grid">
            <div className="row">
                <div className="three wide column">
                    <img src="logo_amarillo2.png" alt="Autopista del Sol"/>
                </div>
                <div className="ten wide column">
                    <h1 className="ui center aligned block header">Gestion de Telecargas</h1>
                </div>
            </div>
            <div className="row">
                <div className="three wide column">
                    <VerticalMenu>

                        <Menu title="Administrador">
                            <MenuItem text="Listar Usuarios VIP" link="/admin/listar-usuarios-vip" />
                            <MenuItem text="Usuarios Que Reciben Lista VIP" link="/admin/find-all-vip-send-ilst" />
                            <MenuItem text="Mail de Usuarios que reciben VIP List" link="/admin/find-all-vip-mail-list" />
                            <MenuItem text="Agregar Tarjeta VIP" link="/admin/add-vip-card" />
                            <MenuItem text="Agregar Telefono de lista VIP" link="/admin/add-movil-owner" />
                            <MenuItem text="Agregar Mail de lista VIP" link="/admin/add-mail-owner" />
                            <MenuItem text="Eliminar Tarjeta VIP" link="/admin/remove-vip-card" />
                            <MenuItem text="Eliminar Mail Owner" link="/admin/remove-mail-owner" />
                            <MenuItem text="Eliminar Movil Owner" link="/admin/remove-movil-owner" />
                            
                        </Menu>
                        <Menu title="Alarmas">
                            <MenuItem text="Nueva Alarma" link="/alarmas/crear-nueva-alarma" />
                            <MenuItem text="Listar Alarmas" link="/alarmas/listar-alarmas" />
                        </Menu>
                        <Menu title="Listas Negras">
                            <MenuItem text="Modificar Lista Negra" link="/blacklists/modificar-lista-negra" />
                            <MenuItem text="Listar Listas Negras" link="/blacklists/listar-listas-negras" />
                            <MenuItem text="Añadir Lista Negra" link="/blacklists/add-blacklist-version" />
                        </Menu>
                        <Menu title="Listas Blancas">
                            <MenuItem text="Modificar Lista Blanca" link="/whitelists/modificar-lista-blanca" />
                            <MenuItem text="Listar Listas Blancas" link="/blacklists/listar-listas-blancas" />
                        </Menu>

                            <MenuItem text="Divisas" link="/currencyexchanges"/>
                            <MenuItem text="Emisores" link="/issuers"/>
                            <MenuItem text="Tarifas" link="/fares"/>
                            <MenuItem text="Usuarios" link="/users"/>
                    </VerticalMenu>
                </div>
                <div className="ten wide column">
                    <Route path="/blacklists/listar-listas-negras">
                        <BlackListDetail />
                    </Route>
                </div>
            </div>
        </div>
  )
}
