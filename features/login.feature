Feature: Login de usuario
    Como usuario del sistema
    Quiero poder iniciar sesión en la plataforma
    Para acceder a las funcionalidades protegidas

    Background:
        Given que el usuario está en la pantalla de Login

    Scenario: Login con credenciales válidas
        When el usuario ingresa el correo "admin@example.com"
        And el usuario ingresa la clave "admin123"
        And el usuario hace clic en el botón "Sign In"
        Then debería verse el botón "Logout"

    Scenario: Login con credenciales inválidas
        When el usuario ingresa el correo "novalido@example.com"
        And el usuario ingresa la clave "clavenovalida"
        And el usuario hace clic en el botón "Sign In"
        Then debería verse el mensaje de error "Invalid email or password"

    Scenario: Login faltando algun dato
        When el usuario ingresa la clave "admin@example.com"
        And el usuario hace clic en el botón "Sign In"
        Then debería verse el mensaje de error "Invalid email or password"

    Scenario: Login sin password
        When el usuario ingresa la clave "admin@example.com"
        Then no debería estar habilitado el boton "Sign In"
