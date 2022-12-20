import React, { useState } from 'react'

function ItemListContainer() {

    const [celulares] = useState([
        { id: 1, marca: 'Samsung', modelo: 'S22', precio: '$599.990' },
        { id: 2, marca: 'iPhone', modelo: '14', precio: '$599.990'},
        { id: 3, marca: 'Motorola', modelo: 'Moto1', precio: '$599.990'},
        { id: 4, marca: 'Xiaomi', modelo: 'Red', precio: '$599.990'},
        { id: 5, marca: 'Sony', modelo: 'XP', precio: '$599.990'}
    ]);

  return (
    <div className="container">
    <h3 className="p-3 text-center">Celulares Disponibles</h3>
    <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
            {celulares.map(celular =>
                <tr>
                    <td>{celular.marca}</td>
                    <td>{celular.modelo}</td>
                    <td>{celular.precio}</td>
                </tr>
            )}
        </tbody>
    </table>
</div>
  )
}

export default ItemListContainer