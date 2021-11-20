import React from 'react'
import "../app/css/estilos.css"

const GridHome = () => {
    return (
        <section>
        <section class="grid__categorias-home">
            <a href="categoria.html">
                <div class="categoria categoria-grande">
                    <h1>Ilustración</h1> 
                </div>
                    
              
            </a>
            
            <section class="grid__categorias-pequeña">
                <span class="categoria cat_web">
                    <h1>Diseño Web</h1>
                </span>
                <div class="categoria cat_design">
                    <h1>Diseño Producto Digital</h1>
                </div>
            </section>
            


        </section>
        
    </section>
    )
}

export default GridHome
