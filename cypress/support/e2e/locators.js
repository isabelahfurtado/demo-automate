const locators = {

    login : {
        usernameField: '[data-test="username"]',
        passwordField: '[data-test="password"]', // Campo de senha
        loginButton: '[data-test="login-button"]', // Botão de login
        errorMessage: '[data-test="error"]', // Mensagem de erro
    },
    navegacao:{
        menuButton: 'button#react-burger-menu-btn', // Botão para abrir o menu lateral
        allItems: '[data-test="inventory-sidebar-link"]', // Link "All Items"
        about: '[data-test="about-sidebar-link"]', // Link "About"
        appState: '[data-test="reset-sidebar-link"]', // Link "App State"
        logout: '[data-test="logout-sidebar-link"]', // Link "Logout" (caso queira incluir)
    },
    carrinho:{
        addToCartButton: (itemIndex) => `button[name="add-to-cart-sauce-labs-backpack"]`, // Exemplo para um item específico, mas pode ser parametrizado
        cartIcon: 'a.shopping_cart_link', // Ícone do carrinho de compras
      
        // Página de Carrinho de Compras
        cartPage: '.cart_list', // Elemento que contém os itens do carrinho
        cartItem: '.cart_item', // Item específico do carrinho
        removeButton: '.cart_button', // Botão de remoção do item
      
        // Finalizar Compra
        checkoutButton: '#checkout', // Botão para ir para a página de checkout
        firstNameField: '#first-name', // Campo para o primeiro nome no checkout
        lastNameField: '#last-name', // Campo para o último nome no checkout
        postalCodeField: '#postal-code', // Campo para o código postal no checkout
        continueButton: '#continue', // Botão de continuar no checkout
        finishButton: '#finish', // Botão para finalizar a compra
        checkoutCompleteMessage: '.complete-header', // Mensagem após a compra ser concluída
    }

}
export default locators;